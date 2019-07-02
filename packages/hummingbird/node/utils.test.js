const { patchI18n } = require('./utils');

const NODES = [
  {
    id: 1,
    title: 'hi',
    slug: 'hi',
    locale: { id: 'en' },
  },
  {
    id: 2,
    title: 'hoi',
    slug: 'hi',
    locale: { id: 'nl' },
  },
  {
    id: 3,
    title: 'salut',
    slug: 'hi',
    locale: { id: 'fr' },
  },
];

it('attaches the locale', () => {
  const patched = patchI18n(NODES);

  expect(patched[0]).not.toHaveProperty('meta');
  expect(patched[0]).not.toHaveProperty('translations.nl.translations');
  expect(patched[0]).toMatchObject({
    id: 1,
    locale: { id: 'en' },
    slug: 'hi',
    translations: [
      {
        id: 2,
        locale: { id: 'nl' },
        title: 'hoi',
        slug: 'hi',
      },
      {
        id: 3,
        locale: { id: 'fr' },
        title: 'salut',
        slug: 'hi',
      },
    ],
  });

  expect(patched[1]).toMatchObject({
    id: 2,
    locale: { id: 'nl' },
    title: 'hoi',
    slug: 'hi',
    translations: [
      {
        id: 1,
        locale: { id: 'en' },
        title: 'hi',
        slug: 'hi',
      },
      {
        id: 3,
        locale: { id: 'fr' },
        title: 'salut',
        slug: 'hi',
      },
    ],
  });
  expect(patched[2]).toMatchObject({ locale: { id: 'fr' } });
  expect(patched[2].translations[0].locale.id).toBe('en');
  expect(patched[2].translations[1].locale.id).toBe('nl');
});
