export default () => {
  if (typeof window === 'undefined')
    return {
      height: null,
      width: null,
    };
  return {
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  };
};
