const query = require('./query');
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
  fundraiser: '/fundraisers',
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
    field: 'articles',
    template: '../../../src/templates/Article.js',
  },
  {
    resourceType: 'node.entry.page',
    field: 'pages',
    template: '../../../src/templates/Page',
  },
  {
    resourceType: 'node.petition',
    prefix: '/petitions',
    field: 'petitions',
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.event',
    prefix: '/events',
    field: 'events',
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.fundraiser',
    prefix: '/fundraisers',
    field: 'fundraisers',
    template: '../../../src/templates/Campaign',
  },
];

module.exports = async ({ graphql, actions: { createPage } }) => {
  // QUERIES

  const {
    data: { wings: { currentApp } = {}, wings = {}, site: { siteMetadata = {} } = {} } = {},
  } = await graphql(query);

  const homeNodeId =
    (currentApp && currentApp.home && currentApp.home.node && currentApp.home.node.id) || null;

  await Promise.all(
    resources.map(async ({ resourceType, prefix = '', field, template }) => {
      const nodes = processNodes(wings[field].edges.map(({ node }) => node));
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`);

      // GENERATE ARTICLES
      nodes.forEach((node) => {
        const isHome = node.id === homeNodeId;
        const path = isHome ? '/' : prefix + node.path;
        const context = {
          node,
          siteMeta: siteMetadata,
          shareUrls: makeShareUrls(node.platforms, siteMetadata.siteUrl + path),
        };
        createPage({
          path,
          component:
            isHome && node.resourceType === 'node.entry.page'
              ? require.resolve('../../../src/templates/PageHome')
              : require.resolve(template),
          context,
        });
        if (['petition', 'event', 'fundraiser'].indexOf(node.resourceType.split('.')[1]) < 0) {
          return;
        }
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
