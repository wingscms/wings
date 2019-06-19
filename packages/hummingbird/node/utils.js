const filterByLocale = (locale, node) => !!(locale === node.locale);

const isTranslation = ({ slug, locale }) => node =>
  locale.id !== node.locale.id && slug === node.slug;

const makeShareUrls = (platforms, url) => {
  const { all, facebook, twitter } = platforms;
  const res = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(twitter.description || all.description)}`,
    whatsapp: `whatsapp://send?text=${encodeURIComponent(
      `${facebook.description || all.description} ${url}`,
    )}`,
    email: `mailto:?subject=${encodeURIComponent(all.title)}&body=${encodeURIComponent(
      `${facebook.description || all.description} ${url}`,
    )}`,
  };
  return res;
};

const patchI18n = (nodes, { primaryLocale } = {}) =>
  nodes.reduce((_patched, _node, i) => {
    const node = {
      ..._node,
      locale: {
        ..._node.locale,
        primary: _node.locale.id === primaryLocale,
      },
      translations: [],
    };
    const patched = _patched.concat([node]);

    if (!(i === nodes.length - 1)) return patched;

    // we're done, reconcile translations
    return patched.map((_p) => {
      const p = { ..._p };
      patched.filter(isTranslation(p)).forEach(({ translations, ...translation }) => {
        p.translations = [...p.translations, translation];
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
  makeShareUrls,
  patchI18n,
  getThemeFromStore,
};
