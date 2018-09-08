const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};

export const TYPE = enumerate('BLOCKQUOTE', 'PULLQUOTE');
export const FLOAT = enumerate('NONE', 'LEFT', 'RIGHT');
