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

const DEFAULT_MEDIUM = { url: '' };

export const ensureNodeFields = (node) => {
  /* eslint-disable no-param-reassign */
  ['all', 'facebook', 'twitter'].forEach((platform) => {
    node.platforms[platform].title = node.platforms[platform].title || '';
    node.platforms[platform].description = node.platforms[platform].description || '';
    node.platforms[platform].medium = node.platforms[platform].medium || DEFAULT_MEDIUM;
    node.image = node.image || DEFAULT_MEDIUM;
  });
  return node;
  /* eslint-enable no-param-reassign */
};
