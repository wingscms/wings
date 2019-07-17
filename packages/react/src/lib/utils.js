import _slugify from 'slugify';

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
