import { GraphQLClient } from 'graphql-request';
const WINGS_APP_KEY = 'z4SS8rqLDrNWMChzslf3IBuWJG1ldbSy';

export default class Wings {
  constructor({ endpoint = 'https://api.wings.dev', appKey, project, domain }) {
    this.endpoint = endpoint;
    this.appKey = appKey;
    this.project = project;
    this.domain = domain;

    const authHeaders = domain
      ? {
          Authorization: `Bearer ${WINGS_APP_KEY}`,
          'X-Wings-App-Domain': domain,
        }
      : {
          Authorization: `Bearer ${appKey}`,
          'X-Wings-Project': project,
        };

    this.client = new GraphQLClient(endpoint, {
      headers: {
        ...authHeaders,
      },
    });
  }

  async query(...args) {
    return this.client.request(...args);
  }
}
