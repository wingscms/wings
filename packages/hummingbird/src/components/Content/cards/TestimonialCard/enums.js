const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};
export default enumerate('SHORT', 'EXTENDED', 'CUSTOM');
