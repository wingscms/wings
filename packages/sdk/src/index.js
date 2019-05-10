import qs from 'qs';

export { default } from './Wings';

export const mediaUrl = (url, opts = {}) => {
  if (!url) return null;
  if (!Object.keys(opts).length) return url;

  const { width: w, height: h } = opts;
  return `${url}?${qs.stringify({
    w,
    h,
    quality: w || h ? 100 : undefined,
  })}`;
};
