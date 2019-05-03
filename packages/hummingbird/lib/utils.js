export const parseJSON = (
  value,
  { defaultValue = {}, errorMessage = "Couldn't parse JSON" } = {},
) => {
  let result;

  try {
    result = value ? JSON.parse(value) : {};
  } catch (e) {
    console.log(errorMessage);
    result = defaultValue;
  }
  return result;
};

export const parseBool = str => (str === 'false' ? false : str === '0' ? false : !!str);

export const makeShareUrls = (platforms, url, meta) => {
  const { all, facebook, twitter } = platforms;
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(twitter.description || all.description)}${
      meta.twitterHashtag ? ` ${encodeURIComponent(meta.twitterHashtag.split(',').join(' '))}` : ''
    }${meta.twitterVia ? encodeURIComponent(` via ${meta.twitterVia}`) : ''}`,
    whatsapp: `whatsapp://send?text=${encodeURIComponent(
      `${facebook.description || all.description} ${url}`,
    )}`,
    email: `mailto:?subject=${encodeURIComponent(all.title)}&body=${encodeURIComponent(
      `${facebook.description || all.description} ${url}`,
    )}`,
  };
};

export const metaToObject = meta => meta.reduce((m, v) => ({ ...m, [v.key]: v.value }), {});

export const dataToObject = data =>
  data.reduce((a, c) => ({ ...a, [c.key]: JSON.parse(c.data) }), {});
