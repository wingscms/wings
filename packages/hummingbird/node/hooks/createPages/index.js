const query = require('./query');
const { patchI18n, makeShareUrls } = require('../../utils');
const routing = require('../../../services/routing');

const NODE_SKELETON = {
  id: '',
  title: '',
  resourceType: '',
  slug: '',
  featured: {
    title: '',
    description: '',
    image: {
      url: '',
    },
  },
  locale: {
    id: '',
    name: '',
    primary: true,
  },
  image: {
    id: '',
    name: '',
    caption: null,
    alt: null,
    key: '',
    url: '',
  },
  meta: [],
  data: [],
  menu: {
    id: '',
    name: '',
    items: [],
  },
  status: '',
  nodeType: '',
  platforms: {
    search: {
      title: '',
      description: '',
    },
    facebook: {
      title: '',
      description: '',
      image: {
        url: '',
      },
    },
    twitter: {
      title: '',
      description: '',
      image: {
        url: '',
      },
    },
    whatsapp: {
      text: null,
    },
    meta: [],
  },
  content: '',
  isHome: false,
  translations: [],
};

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

const verifySlugs = nodes => {
  const processedSlugs = [];
  const validNodes = [];
  const invalidNodes = [];
  nodes.forEach(node => {
    const slugWithLocale = [node.slug, node.locale.id].join('|');
    if (!isValidSlug(node.slug) || contains(processedSlugs, slugWithLocale)) {
      invalidNodes.push(node);
    } else {
      validNodes.push(node);
    }
    processedSlugs.push(slugWithLocale);
  });
  if (invalidNodes.length) {
    invalidNodes.forEach(node => {
      // eslint-disable-next-line no-console
      console.error(
        `[hummingbird] invalid/duplicate slug (${node.slug}) for ${node.nodeType}: ${adminUrl(
          node,
        )}`,
      );
    });
  }
  return validNodes;
};

const processNodes = (_nodes, { homeNodeId }) => {
  const verified = verifySlugs(_nodes);
  let nodes = verified.map(node => ensureNodeFields(node, { homeNodeId }));
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
    resourceType: 'node.signup',
    field: 'signups',
    template: '../../../src/templates/Campaign',
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

const isCampaign = node =>
  !(['signup', 'petition', 'event', 'fundraiser'].indexOf(node.resourceType.split('.')[1]) < 0);

module.exports = async ({ graphql, actions: { createPage } }) => {
  // QUERIES

  const {
    data: { wings: { currentApp } = {}, wings = {}, site: { siteMetadata = {} } = {} } = {},
  } = await graphql(query);

  const homeNode = currentApp && currentApp.home && currentApp.home.node;
  const homeNodeId = (homeNode && homeNode.id) || null;

  await Promise.all(
    resources.map(async ({ resourceType, field, template }) => {
      const nodes = processNodes(wings[field].edges.map(({ node }) => node), {
        homeNodeId,
      });
      console.log(`[hummingbird] found ${nodes.length} of ${resourceType}`); // eslint-disable-line no-console
      // GENERATE ARTICLES
      nodes.forEach(node => {
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
        if (!isCampaign(node)) return;

        createPage({
          path: routing.getCampaignConfirmedPath(node),
          component: require.resolve('../../../src/templates/CampaignConfirmed'),
          context,
        });
      });
    }),
  );
  createPage({
    path: '/404',
    component: require.resolve('../../../src/templates/404'),
    context: {
      node: {
        ...NODE_SKELETON,
        menu: {
          ...NODE_SKELETON.menu,
          ...currentApp.menu,
        },
      },
    },
  });
};
