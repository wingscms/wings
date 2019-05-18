const filterByLocale = (locale, node) => !!(locale === node.locale);

const isTranslation = ({ slug, locale }) => node => locale !== node.locale && slug === node.slug;

const constructPath = (locale, defaultLocale, node) =>
  (locale === defaultLocale ? node.path : `/${locale}/${node.slug}`);

const patchI18n = (nodes, { defaultLocale = 'en' } = {}) =>
  nodes.reduce((_patched, _node, i) => {
    const { meta: { locale = defaultLocale } = {} } = _node;
    const node = {
      ..._node,
      locale,
      path: constructPath(locale, defaultLocale, _node),
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

const getThemeFromStore = (store) => {
  const { config } = store.getState();
  return config.__experimentalThemes.find(theme => theme.resolve.indexOf('hummingbird') > -1);
};

module.exports = {
  filterByLocale,
  patchI18n,
  getThemeFromStore,
};
