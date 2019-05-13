const isFeatured = node => !!node.meta.featuredHome;
const shouldDisplayOnHome = node => !!node.meta.onHome;
const filterByLocale = (locale, node) => !!(locale === node.locale);
const sortByMeta = key => (a, b) => a.meta[key] - b.meta[key];
const metaToObject = meta => meta.reduce((m, v) => ({ ...m, [v.key]: v.value }), {});
const ensureNodeFields = node => ({
  ...node,
  _meta: node.meta,
  meta: node.meta ? metaToObject(node.meta) : {},
  path: node.slug || '/',
});

const filterArchive = (archive, filterVal) =>
  archive
    .filter(x => !x.meta.noIndex)
    .filter(x => !x.meta.isArchive)
    .filter(x => !x.meta.isHome)
    .filter(x =>
      (!filterVal
        ? true
        : x.meta.archiveFilter &&
          x.meta.archiveFilter.split(',').filter(y => y === filterVal).length > 0),
    );

const getArchive = (type, types, filter = '') => {
  if (types[type]) {
    return filterArchive(types[type], filter);
  }
  return filterArchive(types.article, filter);
};

const isTranslation = ({ slug, locale }) => node => locale !== node.locale && slug === node.slug;

const constructPath = (isHome, locale, defaultLocale, node) => {
  if (isHome) {
    return locale === defaultLocale ? '/' : `/${locale}`;
  }
  return locale === defaultLocale ? node.path : `/${locale}/${node.slug}`;
};

const patchI18n = (nodes, { defaultLocale = 'en' } = {}) =>
  nodes.reduce((_patched, _node, i) => {
    const { meta: { locale = defaultLocale } = {} } = _node;
    const node = {
      ..._node,
      locale,
      path: constructPath(_node.meta.isHome, locale, defaultLocale, _node),
      translations: [],
    };
    const patched = _patched.concat([node]);

    if (!(i === nodes.length - 1)) return patched;

    // we're done, reconcile translations
    return patched.map((_p) => {
      const p = { ..._p };
      patched
        .filter(isTranslation({ slug: p.slug, locale: p.locale }))
        .forEach(({ translations, ...translation }) => {
          p.translations = [
            ...p.translations,
            { locale: translation.locale, path: translation.path },
          ];
        });
      return p;
    });
  }, []);

const filterEmptySlugs = (node) => {
  if (node.path !== '/') {
    return true;
  } else if (node.path === '/' && node.meta.isHome) {
    return true;
  }
  return false;
};

const getThemeFromStore = (store) => {
  const { config } = store.getState();
  return config.__experimentalThemes.find(theme => theme.resolve.indexOf('hummingbird') > -1);
};

module.exports = {
  ensureNodeFields,
  getArchive,
  isFeatured,
  filterByLocale,
  filterEmptySlugs,
  patchI18n,
  shouldDisplayOnHome,
  sortByMeta,
  getThemeFromStore,
};
