import qs from 'qs';

export { default } from './Wings';

export const mediaUrl = (url, opts = {}) => {
  if (!Object.keys(opts).length || (!opts.width && !opts.height)) return mediaUrl;

  const { width: w, height: h } = opts;
  return `${mediaUrl}?${qs.stringify({
    w,
    h,
    quality: w || h ? 100 : undefined,
  })}`;
};
