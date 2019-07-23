const query = require('./query');
const { patchI18n, makeShareUrls } = require('../../utils');
const routing = require('../../../services/routing');

const { GATSBY_WINGS_PROJECT: projectId } = process.env;

const ensureNodeFields = (node, { homeNodeId }) => ({
  ...node,
  isHome: node.id === homeNodeId,
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
    const slugWithLocale = [node.slug, node.locale.id].join('|');
    if (!isValidSlug(node.slug) || contains(processedSlugs, slugWithLocale)) {
      invalidNodes.push(node);
    }
    processedSlugs.push(slugWithLocale);
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

const processNodes = (_nodes, { homeNodeId }) => {
  verifySlugs(_nodes);
  let nodes = _nodes.map(node => ensureNodeFields(node, { homeNodeId }));
  nodes = patchI18n(nodes);
  return nodes;
};

const resources = [
  {
    resourceType: 'node.entry.article',
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
    field: 'petitions',
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.event',
    field: 'events',
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.fundraiser',
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
    resources.map(async ({ resourceType, field, template }) => {
      const nodes = processNodes(wings[field].edges.map(({ node }) => node), {
        homeNodeId,
      });
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`);

      // GENERATE ARTICLES
      nodes.forEach((node) => {
        const { isHome } = node;
        const path = routing.getPath(node);
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
          path: routing.getCampaignConfirmedPath(node),
          component: require.resolve('../../../src/templates/CampaignConfirmed'),
          context,
        });
      });
    }),
  );
};
