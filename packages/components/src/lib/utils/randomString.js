export default (length = 10) =>
  Math.random()
    .toString(length)
    .replace(/[^a-zA-Z0-9]+/g, '')
    .substr(0, 5);
