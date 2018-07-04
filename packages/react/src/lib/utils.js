import _slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const slugify = s =>
  _slugify(s, {
    remove: /[$*_+~.()'"!\-:@]/g,
    lower: true,
  });
