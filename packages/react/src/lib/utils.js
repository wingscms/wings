export const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};
