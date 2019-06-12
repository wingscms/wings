const { patchSchema } = require('./utils');

const SCHEMA = {
  type: 'object',
  required: ['firstName', 'lastName', 'email', 'terms', 'privacyConsent'],
  properties: {
    firstName: { title: 'First name', type: 'string' },
    lastName: { title: 'Last name', type: 'string' },
    email: { title: 'Email address', type: 'string', format: 'email' },
    newsletter: { title: 'Stay up to date', type: 'boolean' },
    terms: {
      title: 'Agree to our terms & conditions',
      type: 'boolean',
      enum: [true],
    },
    privacyConsent: {
      title: 'Agree to our privacy policy',
      type: 'boolean',
      enum: [true],
    },
    doNotOverrideThis: { title: 'Some nonsense', type: 'boolean' },
  },
};

const PATCHED_SCHEMA = {
  type: 'object',
  required: ['firstName', 'lastName', 'email', 'terms', 'privacyConsent'],
  properties: {
    firstName: { title: 'Voornaam', type: 'string' },
    lastName: { title: 'Last name', type: 'string' },
    email: { title: 'Email address', type: 'string', format: 'email' },
    newsletter: { title: 'Stay up to date', type: 'boolean' },
    terms: {
      title: 'Agree to our terms & conditions',
      type: 'boolean',
      enum: [true],
    },
    privacyConsent: {
      title: 'Agree to our privacy policy',
      type: 'boolean',
      enum: [true],
    },
    doNotOverrideThis: { title: 'Some nonsense', type: 'boolean' },
  },
};

const FIELD_DEFINITIONS = {
  firstName: { title: 'Voornaam' },
};

describe('patchSchema', () => {
  it('should correctly patch in field definitions', () => {
    const res = patchSchema(SCHEMA, FIELD_DEFINITIONS);
    expect(res).toMatchObject(PATCHED_SCHEMA);
  });
});
