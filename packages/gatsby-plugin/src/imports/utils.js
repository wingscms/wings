import fetch from 'node-fetch';
import crypto from 'crypto';

export const md5 = d =>
  crypto
    .createHash('md5')
    .update(d)
    .digest('hex');

export const query = async ({
  query: q,
  endpoint = 'https://api.wings-platform.com',
  token,
  project,
}) => {
  const res = await fetch(`${endpoint}?query=${encodeURIComponent(q)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Wings-Project': project,
    },
  });
  return res.json();
};

export const ensureNodeFields = (node) => {
  /* eslint-disable no-param-reassign */
  const defaultMedium = { url: '' };
  node.platforms.all.medium = node.platforms.all.medium || defaultMedium;
  node.platforms.facebook.medium = node.platforms.facebook.medium || defaultMedium;
  node.platforms.twitter.medium = node.platforms.twitter.medium || defaultMedium;
  node.image = node.image || defaultMedium;
  return node;
  /* eslint-enable no-param-reassign */
};
