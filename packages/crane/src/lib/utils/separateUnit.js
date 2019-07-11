export default (str) => {
  const val = /([0-9])*/.exec(str)[0];
  const unit = str.substr(val.length, str.length - 1);
  return [val, unit];
};
