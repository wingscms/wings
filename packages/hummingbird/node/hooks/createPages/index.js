const articleQuery = require('./queries/articleQuery');
const pageQuery = require('./queries/pageQuery');
const petitionQuery = require('./queries/petitionQuery');
const eventQuery = require('./queries/eventQuery');
const siteMetaQuery = require('./queries/siteMeta');
const { patchI18n } = require('../../utils');

const {
  GATSBY__TEMP_I18N_ENABLED: i18nEnabled,
  GATSBY__TEMP_I18N_DEFAULT_LOCALE: defaultLocale = 'en',
} = process.env;

const ensureNodeFields = node => ({
  ...node,
  path: node.slug.split('/')[0],
});

const filterEmptySlugs = node => !!node.slug.split('/')[0];

const processNodes = (_nodes) => {
  let nodes = _nodes.filter(filterEmptySlugs).map(ensureNodeFields);
  if (i18nEnabled) nodes = patchI18n(nodes, defaultLocale);
  return nodes;
};

const setResourceType = resourceType => node => ({ ...node, resourceType });

const resources = [
  {
    resourceType: 'node.entry.article',
    query: articleQuery,
    template: '../../../src/templates/Article.js',
  },
  { resourceType: 'node.entry.page', query: pageQuery, template: '../../../src/templates/Page' },
  {
    resourceType: 'node.campaign.petition',
    query: petitionQuery,
    template: '../../../src/templates/Campaign',
  },
  {
    resourceType: 'node.campaign.event',
    query: eventQuery,
    template: '../../../src/templates/Campaign',
  },
];

module.exports = async ({ graphql, actions: { createPage } }) => {
  // QUERIES
  const siteMetaRes = await graphql(siteMetaQuery);
  const { siteMetadata: siteMeta } =
    siteMetaRes.data && siteMetaRes.data.site && siteMetaRes.data.site;

  await Promise.all(
    resources.map(async ({ resourceType, query, template }) => {
      const res = await graphql(query);
      const edges =
        (res.data && res.data.wings && res.data.wings.nodes && res.data.wings.nodes.edges) || [];
      const nodes = processNodes(edges.map(({ node }) => node).map(setResourceType(resourceType)));
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`);
      // GENERATE ARTICLES
      nodes.forEach((node) => {
        createPage({
          path: node.path,
          component: require.resolve(template),
          context: { node, siteMeta },
        });
        if (!(node.resourceType.split('.')[1] === 'campaign')) return;
        createPage({
          path: `${node.path}/confirm`,
          component: require.resolve('../../../src/templates/CampaignConfirm'),
          context: { node, siteMeta },
        });
        createPage({
          path: `${node.path}/confirmed`,
          component: require.resolve('../../../src/templates/CampaignConfirmed'),
          context: { node, siteMeta },
        });
      });
    }),
  );
};
