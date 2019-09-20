import campaignCopy from './petitionCopy';

let schemaOverrides = {};
try {
  // eslint-disable-next-line import/no-dynamic-require
  schemaOverrides = require(`${process.cwd()}lib/schemas`);
  // do stuff
} catch (err) {
  console.log('No custom schemas/overrides');
}

export default {
  campaignCopy,
  ...schemaOverrides,
};
