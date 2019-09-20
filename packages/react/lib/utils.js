export const dataToObject = data =>
  data.reduce((a, c) => ({ ...a, [c.key]: JSON.parse(c.data) }), {});

export const removeEmptyProperties = (obj) => {
  if (!Object.keys(obj)) return {};
  return Object.keys(obj).reduce((a, c) => {
    const newObj = { ...a, [c]: obj[c] };
    if (!newObj[c]) {
      delete newObj[c];
    }
    return newObj;
  }, {});
};
