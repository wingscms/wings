const articleQuery = require('./queries/articleQuery');
const pageQuery = require('./queries/pageQuery');
const petitionQuery = require('./queries/petitionQuery');
const eventQuery = require('./queries/eventQuery');
const siteMetaQuery = require('./queries/siteMeta');
const appQuery = require('./queries/appQuery');
const { patchI18n, makeShareUrls } = require('../../utils');

const {
  GATSBY__TEMP_I18N_ENABLED: i18nEnabled,
  GATSBY__TEMP_I18N_DEFAULT_LOCALE: defaultLocale = 'en',
  GATSBY_WINGS_PROJECT: projectId,
} = process.env;

const ensureNodeFields = node => ({
  ...node,
  path: `/${node.slug.split('/')[0]}`,
});

const WINGS_ADMIN_PATH = {
  entry: '/entries',
  page: '/entries',
  petition: '/petitions',
  event: '/events',
};

const isValidSlug = slug => !!slug && /^[a-z0-9]+(?:-[a-z0-9]+)*?$/.exec(slug);
const contains = (arr, el) => arr.indexOf(el) > 0;
const adminUrl = node =>
  `https://admin.wings.dev/${projectId}${WINGS_ADMIN_PATH[node.nodeType]}/${node.id}`;

const verifySlugs = (nodes) => {
  const processedSlugs = [];
  const invalidNodes = [];
  nodes.forEach((node) => {
    if (!isValidSlug(node.slug) || contains(processedSlugs, node.slug)) invalidNodes.push(node);
    processedSlugs.push(node.slug);
  });
  if (invalidNodes.length) {
    invalidNodes.forEach((node) => {
      console.error(
        `[hummingbird] invalid/duplicate slug (${node.slug}) for ${node.nodeType}: ${adminUrl(
          node,
        )}`,
      );
    });
    process.exit(1);
  }
};

const processNodes = (_nodes) => {
  verifySlugs(_nodes);
  let nodes = _nodes.map(node => ensureNodeFields(node));
  if (i18nEnabled) nodes = patchI18n(nodes, defaultLocale);
  return nodes;
};

const resources = [
  {
    resourceType: 'node.entry.article',
    prefix: '/articles',
    query: articleQuery,
    template: '../../../src/templates/Article.js',
  },
  {
    resourceType: 'node.entry.page',
    query: pageQuery,
    template: '../../../src/templates/Page',
  },
  {
    resourceType: 'node.petition',
    prefix: '/petitions',
    query: petitionQuery,
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.event',
    prefix: '/events',
    query: eventQuery,
    template: '../../../src/templates/Campaign',
  },
];

module.exports = async ({ graphql, actions: { createPage } }) => {
  // QUERIES
  const siteMetaRes = await graphql(siteMetaQuery);
  const { siteMetadata: siteMeta } =
    siteMetaRes.data && siteMetaRes.data.site && siteMetaRes.data.site;
  const appRes = await graphql(appQuery);
  const { home: { node: homeNode = {} } = {} } =
    appRes.data && appRes.data.wings && appRes.data.wings.currentApp;
  const { id: homeNodeId } = homeNode || {};
  await Promise.all(
    resources.map(async ({ resourceType, prefix = '', query, template }) => {
      const res = await graphql(query);
      const edges =
        (res.data && res.data.wings && res.data.wings.nodes && res.data.wings.nodes.edges) || [];
      const nodes = processNodes(edges.map(({ node }) => node));
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`);

      // GENERATE ARTICLES
      nodes.forEach((node) => {
        const isHome = node.id === homeNodeId;
        const path = isHome ? '/' : prefix + node.path;
        const context = {
          node,
          siteMeta,
          shareUrls: makeShareUrls(node.platforms, siteMeta.siteUrl + path),
        };
        createPage({
          path,
          component: isHome
            ? require.resolve('../../../src/templates/PageHome')
            : require.resolve(template),
          context,
        });
        if (['petition', 'event'].indexOf(node.resourceType.split('.')[1]) < 0) return;
        createPage({
          path: `${path}/confirm`,
          component: require.resolve('../../../src/templates/CampaignConfirm'),
          context,
        });
        createPage({
          path: `${path}/confirmed`,
          component: require.resolve('../../../src/templates/CampaignConfirmed'),
          context,
        });
      });
    }),
  );
};
