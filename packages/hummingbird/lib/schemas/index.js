import petitionCopy from './petitionCopy';
import petitionOptions from './petitionOptions';
import eventCopy from './eventCopy';
import fundraiserCopy from './fundraiserCopy';
import signupCopy from './signupCopy';

let schemaOverrides = {};
try {
  // eslint-disable-next-line import/no-dynamic-require
  schemaOverrides = require(`${process.cwd()}lib/schemas`);
} catch (err) {
  console.log('No custom schemas/overrides');
}

export default {
  petitionCopy,
  petitionOptions,
  eventCopy,
  fundraiserCopy,
  signupCopy,
  ...schemaOverrides,
};
