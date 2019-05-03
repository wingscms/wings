const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};
export const SIZE = enumerate('MEDIUM', 'LARGE', 'EXTRALARGE');
export const FLOAT = enumerate('NONE', 'LEFT', 'RIGHT');
