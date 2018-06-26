import qs from 'qs';
import 'babel-polyfill';
import { GraphQLClient } from 'graphql-request';

export default class Wings {
  constructor({ endpoint = 'https://api.wings-platform.com', appKey, project }) {
    this.client = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${appKey}`,
        'X-Wings-Project': project,
      },
    });
  }
  async query(...args) {
    return this.client.request(...args);
  }
}

export const mediaUrl = (url, opts = {}) => {
  if (!Object.keys(opts).length || (!opts.width && !opts.height)) return mediaUrl;

  const { width: w, height: h } = opts;
  return `${mediaUrl}?${qs.stringify({
    w,
    h,
    quality: w || h ? 100 : undefined,
  })}`;
};
