const fs = require('fs');

const en = require('./en.json');

const ids = Object.keys(en);

const locales = fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith('.json'))
  .map(file => file.split('.')[0]);

describe('translations', () => {
  it('should contain all ids', () => {
    locales.forEach(locale => {
      const l = require(`./${locale}.json`);
      const lKeys = Object.keys(l);
      expect(lKeys).toStrictEqual(ids);
    });
  });
  it('should not contain empty values', () => {
    locales.forEach(locale => {
      const l = require(`./${locale}.json`);
      const lValues = Object.values(l);
      expect(lValues).toEqual(expect.not.arrayContaining(['']));
    });
  });
});
