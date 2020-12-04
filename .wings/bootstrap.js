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

const bootstrap = async () => {
  const client = new Wings({ domain: 'localhost' });
  if (!fs.existsSync(schemaPath)) {
    const data = await client.query(getIntrospectionQuery());
    fs.writeFileSync(schemaPath, JSON.stringify(data, null, 2));
  }

  const data = await client.query(`
    query LocaleData {
      defaultAppCopy {
        message {
          messageId
          message
        }
        locale {
          id
        }
      }
    }
  `);

  const locales = data.defaultAppCopy.reduce((l, c) => {
    return {
      ...l,
      [c.locale.id]: { ...l[c.locale.id], [c.message.messageId]: c.message.message },
    };
  }, {});

  const pLocales = Object.keys(locales).map(async locale => {
    const localePath = path.join(__dirname, 'data', `${locale}.json`);
    if (!fs.existsSync(localePath)) {
      fs.writeFileSync(localePath, JSON.stringify(locales[locale], null, 2));
    }
  });

  await Promise.all(pLocales);
};

module.exports = bootstrap;
