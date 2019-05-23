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
} = process.env;

const ensureNodeFields = node => ({
  ...node,
  path: `/${node.slug.split('/')[0]}`,
});

const verifySlug = (node) => {
  if (!node.slug || !node.slug.split('/')[0]) {
    console.error(`[hummingbird] invalid slug for ${node.nodeType} with id ${node.id}`);

    process.exit(1);
  }
};

const processNodes = (_nodes) => {
  let nodes = _nodes.map((node) => {
    verifySlug(node);
    return ensureNodeFields(node);
  });
  if (i18nEnabled) nodes = patchI18n(nodes, defaultLocale);
  return nodes;
};

const resources = [
  {
    prefix: '/articles',
    query: articleQuery,
    template: '../../../src/templates/Article.js',
  },
  {
    query: pageQuery,
    template: '../../../src/templates/Page',
  },
  {
    prefix: '/petitions',
    query: petitionQuery,
    template: '../../../src/templates/Campaign',
  },
  {
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
  const { home: { node: { id: homeNodeId } = {} } = {} } =
    appRes.data && appRes.data.wings && appRes.data.wings.currentApp;
  await Promise.all(
    resources.map(async ({ resourceType, prefix = '', query, template }) => {
      const res = await graphql(query);
      const edges =
        (res.data && res.data.wings && res.data.wings.nodes && res.data.wings.nodes.edges) || [];
      const nodes = processNodes(edges.map(({ node }) => node));
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`);

      // GENERATE ARTICLES
      nodes.forEach((node) => {
        const path = node.id === homeNodeId ? '/' : prefix + node.path;
        const context = {
          node,
          siteMeta,
          shareUrls: makeShareUrls(node.platforms, siteMeta.siteUrl + path),
        };
        createPage({
          path,
          component: require.resolve(template),
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
