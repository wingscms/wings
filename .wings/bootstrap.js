const fs = require('fs');
const path = require('path');
const { GraphQLClient } = require('graphql-request');
const { getIntrospectionQuery } = require('graphql');

const WINGS_APP_KEY = 'z4SS8rqLDrNWMChzslf3IBuWJG1ldbSy';

class Wings {
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

const schemaPath = path.join(__dirname, 'data', 'introspectionResult.json');

const locales = ['en', 'de', 'nl'];

const bootstrap = async () => {
  const client = new Wings({ domain: 'localhost' });
  if (!fs.existsSync(schemaPath)) {
    const data = await client.query(getIntrospectionQuery());
    fs.writeFileSync(schemaPath, JSON.stringify(data, null, 2));
  }

  const pLocales = locales.map(async locale => {
    const localePath = path.join(__dirname, 'data', `${locale}.json`);

    if (!fs.existsSync(localePath)) {
      const data = await client.query(
        `
      query LocaleData($locale: String) {
        currentApp {
          ... on WebApp {
            copy(localeId: $locale) {
              message {
                messageId
                message
              }
            }
          }
        }
      }`,
        { locale },
      );

      fs.writeFileSync(
        localePath,
        JSON.stringify(
          data.currentApp.copy.reduce(
            (messages, entry) => ({
              ...messages,
              [entry.message.messageId]: entry.message.message,
            }),
            {},
          ),
          null,
          2,
        ),
      );
    }
  });

  await Promise.all(pLocales);
};

module.exports = bootstrap;
