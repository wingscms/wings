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
