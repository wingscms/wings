import _slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const slugify = s =>
  _slugify(s, {
    remove: /[$*_+~.()'"!\-:@]/g,
    lower: true,
  });

export const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};
