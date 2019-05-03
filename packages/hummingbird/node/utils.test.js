const { patchI18n } = require('./utils');

const NODES = [
  {
    id: 1,
    title: 'hi',
    slug: 'hi',
    path: '/hi',
  },
  {
    id: 2,
    title: 'hoi',
    slug: 'hi',
    path: '/hi',
    meta: {
      locale: 'nl',
    },
  },
  {
    id: 3,
    title: 'salut',
    slug: 'hi',
    path: '/hi',
    meta: {
      locale: 'fr',
    },
  },
];

it('attaches the locale', () => {
  const patched = patchI18n(NODES);

  expect(patched[0]).not.toHaveProperty('meta');
  expect(patched[0]).not.toHaveProperty('translations.nl.translations');
  expect(patched[0]).toMatchObject({
    id: 1,
    locale: 'en',
    slug: 'hi',
    translations: {
      nl: {
        id: 2,
        locale: 'nl',
        title: 'hoi',
        slug: 'hi',
      },
      fr: {
        id: 3,
        locale: 'fr',
        title: 'salut',
        slug: 'hi',
      },
    },
  });

  expect(patched[1]).toMatchObject({
    id: 2,
    locale: 'nl',
    title: 'hoi',
    slug: 'hi',
    path: '/nl/hi',
    translations: {
      en: {
        id: 1,
        locale: 'en',
        title: 'hi',
        slug: 'hi',
        path: '/hi',
      },
      fr: {
        id: 3,
        locale: 'fr',
        title: 'salut',
        slug: 'hi',
        path: '/fr/hi',
      },
    },
  });
  expect(patched[2]).toMatchObject({ locale: 'fr' });
  expect(patched[2]).not.toHaveProperty('translations.fr');
  expect(patched[2]).not.toHaveProperty('translations.nl.translations');
});
