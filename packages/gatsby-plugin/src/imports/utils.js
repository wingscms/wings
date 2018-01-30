import fetch from 'node-fetch';
import crypto from 'crypto';

export const md5 = d =>
  crypto
    .createHash('md5')
    .update(d)
    .digest('hex');

export const query = async ({ query: q, endpoint = 'https://api.wings-platform.com', token }) => {
  const res = await fetch(`${endpoint}?query=${encodeURIComponent(q)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const articleToNode = a => ({
  article: a,

  id: a.id,
  parent: null,
  children: [],
  internal: {
    type: 'WingsArticle',
    contentDigest: md5(JSON.stringify(a.id)),
  },
});
