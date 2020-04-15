const Wings = require('@wingscms/sdk').default;
const fs = require('fs');
const path = require('path');
const { getIntrospectionQuery } = require('graphql');

const schemaPath = path.join(__dirname, 'introspectionResult.json');

const locales = ['en', 'nl'];

const bootstrap = async () => {
  const client = new Wings({ domain: 'localhost' });
  if (!fs.existsSync(schemaPath)) {
    const data = await client.query(getIntrospectionQuery());
    fs.writeFileSync(schemaPath, JSON.stringify(data, null, 2));
  }

  const pLocales = locales.map(async locale => {
    const localePath = path.join(__dirname, `${locale}.json`);

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

module.exports = bootstrap();
