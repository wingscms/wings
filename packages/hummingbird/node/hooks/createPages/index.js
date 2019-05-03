const createPaginatedPages = require('gatsby-paginate');
const articleQuery = require('./queries/articleQuery');
const pageQuery = require('./queries/pageQuery');
const petitionQuery = require('./queries/petitionQuery');
const eventQuery = require('./queries/eventQuery');
const siteMetaQuery = require('./queries/siteMeta');
const {
  ensureNodeFields,
  getArchive,
  isFeatured,
  filterByLocale,
  filterEmptySlugs,
  shouldDisplayOnHome,
  sortByMeta,
  patchI18n,
} = require('../../utils');

const {
  GATSBY__TEMP_I18N_ENABLED: i18nEnabled,
  GATSBY__TEMP_I18N_DEFAULT_LOCALE: defaultLocale = 'en',
} = process.env;

const processNodes = (_nodes) => {
  let nodes = _nodes.map(ensureNodeFields).filter(filterEmptySlugs);
  if (i18nEnabled) nodes = patchI18n(nodes, defaultLocale);
  return nodes;
};

const edgeToNode = ({ node }) => node;

module.exports = async ({ graphql, actions: { createPage } }) => {
  // QUERIES
  const [articleRes, pageRes, petitionsRes, eventsRes, siteMetaRes] = await Promise.all([
    graphql(articleQuery),
    graphql(pageQuery),
    graphql(petitionQuery),
    graphql(eventQuery),
    graphql(siteMetaQuery),
  ]);

  const { siteMetadata: siteMeta } =
    siteMetaRes.data && siteMetaRes.data.site && siteMetaRes.data.site;
  const articleEdges =
    (articleRes.data &&
      articleRes.data.wings &&
      articleRes.data.wings.entries &&
      articleRes.data.wings.entries.edges) ||
    [];

  const pageEdges =
    (pageRes &&
      pageRes.data &&
      pageRes.data.wings &&
      pageRes.data.wings.entries &&
      pageRes.data.wings.entries.edges) ||
    [];

  const petitionEdges =
    (petitionsRes &&
      petitionsRes.data &&
      petitionsRes.data.wings &&
      petitionsRes.data.wings.petitions &&
      petitionsRes.data.wings.petitions.edges) ||
    [];

  const eventEdges =
    (eventsRes &&
      eventsRes.data &&
      eventsRes.data.wings &&
      eventsRes.data.wings.events &&
      eventsRes.data.wings.events.edges) ||
    [];

  const articles = processNodes(articleEdges.map(edgeToNode));
  const pages = processNodes(pageEdges.map(edgeToNode));
  const petitions = processNodes(petitionEdges.map(edgeToNode));
  const events = processNodes(eventEdges.map(edgeToNode));

  const allNodes = []
    .concat(articles)
    .concat(pages)
    .concat(petitions)
    .concat(events);

  const featured = allNodes.filter(isFeatured);
  const homeNodes = allNodes.filter(shouldDisplayOnHome);
  const loop = homeNodes.length ? homeNodes.sort(sortByMeta('order')) : [];

  if (!articles.length) console.log('no articles found');
  if (!pages.length) console.log('no pages found');
  if (!petitions.length) console.log('no petitions found');
  if (!events.length) console.log('no events found');

  // GENERATE ARTICLES
  articles.forEach((entry) => {
    createPage({
      path: entry.path,
      component: require.resolve('../../../src/templates/ArticleDefault.js'),
      context: { entry, siteMeta },
    });
  });
  // GENERATE PAGES
  let homepage = false;
  pages.forEach((entry) => {
    // Create home page
    if (entry.meta.isHome === 'true') {
      homepage = true;
      createPage({
        path: i18nEnabled ? entry.path : '/',
        component: require.resolve('../../../src/templates/PageHome.js'),
        context: {
          entry,
          featured: i18nEnabled ? featured.filter(x => filterByLocale(entry.locale, x)) : featured,
          loop: i18nEnabled ? loop.filter(x => filterByLocale(entry.locale, x)) : loop,
          siteMeta,
        },
      });
      // Archive page
    } else if (entry.meta && entry.meta.isArchive === 'true') {
      const { archiveType, archiveFilter } = entry.meta;
      createPaginatedPages({
        edges: getArchive(
          archiveType,
          {
            article: articles,
            petition: petitions,
            event: events,
            page: pages,
            all: allNodes,
          },
          archiveFilter,
        ),
        createPage,
        pageTemplate: require.resolve('../../../src/templates/ArchiveDefault.js'),
        pageLength: 12,
        pathPrefix: `${entry.slug}`,
        context: { entry, siteMeta },
      });
    } else {
      createPage({
        path: entry.path,
        component: require.resolve('../../../src/templates/PageDefault.js'),
        context: { entry, siteMeta },
      });
    }
  });

  // GENERATE PETITIONS
  petitions.forEach((petition) => {
    const h = petition.meta.isHome === 'true';
    homepage = true;
    createPage({
      path: h ? '/' : `${petition.path}`,
      component: require.resolve('../../../src/templates/PetitionDefault.js'),
      context: { petition, siteMeta },
    });
    createPage({
      path: h ? '/confirm' : `${petition.path}/confirm`,
      component: require.resolve('../../../src/templates/PetitionConfirmDefault.js'),
      context: { petition, siteMeta },
    });
    createPage({
      path: h ? '/confirmed' : `${petition.path}/confirmed`,
      component: require.resolve('../../../src/templates/PetitionConfirmedDefault.js'),
      context: { petition, siteMeta },
    });
  });

  // GENERATE EVENTS
  events.forEach((event) => {
    const h = event.meta.isHome === 'true';
    homepage = h ? true : homepage;
    createPage({
      path: h ? '/' : `${event.path}`,
      component: require.resolve('../../../src/templates/EventDefault.js'),
      context: { event, siteMeta },
    });
    createPage({
      path: h ? '/confirm' : `${event.path}/confirm`,
      component: require.resolve('../../../src/templates/EventConfirmDefault.js'),
      context: { event, siteMeta },
    });
    createPage({
      path: h ? '/confirmed' : `${event.path}/confirmed`,
      component: require.resolve('../../../src/templates/EventConfirmedDefault.js'),
      context: { event, siteMeta },
    });
  });

  if (!homepage) {
    createPaginatedPages({
      edges: articleRes.data.wings.entries.edges,
      createPage,
      pageTemplate: require.resolve('../../../src/templates/LoopDefault.js'),
      pageLength: 5,
      pathPrefix: '',
      context: { entry: articleRes.data.wings.entries.edges[0].node, siteMeta },
    });
  }
};
