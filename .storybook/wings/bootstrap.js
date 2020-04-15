const Wings = require('@wingscms/sdk').default;
const fs = require('fs');
const path = require('path');
const { getIntrospectionQuery } = require('graphql');

const schemaPath = path.join(__dirname, 'introspectionResult.json');
const messagesPath = path.join(__dirname, 'messages.json');

const bootstrap = async () => {
  const client = new Wings({ domain: 'localhost' });
  if (!fs.existsSync(schemaPath)) {
    const data = await client.query(getIntrospectionQuery());
    fs.writeFileSync(schemaPath, JSON.stringify(data, null, 2));
  }
  if (!fs.existsSync(messagesPath)) {
    const localeData = await client.query(`{
      currentApp {
        ... on WebApp {
          copy {
            message {
              messageId
              message
            }
          }
        }
      }
    }`);
    fs.writeFileSync(
      messagesPath,
      JSON.stringify(
        localeData.currentApp.copy.reduce(
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
};

module.exports = bootstrap();
