import { GraphQLClient } from 'graphql-request';
const WINGS_APP_KEY = 'z4SS8rqLDrNWMChzslf3IBuWJG1ldbSy';

export default class Wings {
  constructor({ endpoint = 'https://api.wings.dev', appKey, project, domain }) {
    this.endpoint = endpoint;
    this.appKey = appKey;
    this.project = project;
    this.domain = domain;

    this.client = new GraphQLClient(endpoint, {
      headers: {
        ...this.authHeaders(),
      },
    });
  }

  async query(...args) {
    return this.client.request(...args);
  }

  authHeaders = () => {
    if (this.domain) {
      return {
        Authorization: `Bearer ${WINGS_APP_KEY}`,
        'X-Wings-Domain': this.domain,
      };
    }
    return {
      Authorization: `Bearer ${this.appKey}`,
      'X-Wings-Project': this.project,
    };
  };
}
