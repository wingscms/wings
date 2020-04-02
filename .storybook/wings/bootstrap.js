const Wings = require('@wingscms/sdk').default;
const fs = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, 'introspectionResult.json');

const bootstrap = async () => {
  if (!fs.existsSync(schemaPath)) {
    const client = new Wings({ domain: 'localhost' });
    const data = await client.introspect();
    fs.writeFileSync(schemaPath, JSON.stringify(data, null, 2));
  }
};

module.exports = bootstrap();
