export const parseBool = str => (str === 'false' ? false : str === '0' ? false : !!str);

export const dataToObject = data =>
  data.reduce((a, c) => ({ ...a, [c.key]: JSON.parse(c.data) }), {});

export const enumerate = (...args) => {
  const obj = {};
  args.forEach((arg, i) => {
    obj[(obj[arg] = i)] = arg;
  });
  return obj;
};

export function parseJSON(value, { defaultValue = {}, errorMessage = "Couldn't parse JSON" } = {}) {
  let result;

  try {
    result = value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.log(errorMessage); // eslint-disable-line no-console
    result = defaultValue;
  }
  return result;
}

export const getViewportDimensions = () => {
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
