const path = require('path');
const babelConfig = path.join(__dirname, '.babelrc');

module.exports = {
  globalSetup: '<rootDir>/.jest/setup.js',
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  collectCoverageFrom: ['packages/**/src/**/*.js', '!packages/**/src/**/*.stories.js'],
  transform: {
    '\\.js$': ['babel-jest', { configFile: babelConfig }],
  },
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-contexts)/)'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '@wingscms/([^/]*)': '<rootDir>/packages/$1/src',
  },
};
