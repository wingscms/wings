const path = require('path');
const babelConfig = path.join(__dirname, '.babelrc');

module.exports = {
  globalSetup: '<rootDir>/.jest/setup.js',
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  transform: {
    '\\.js$': ['babel-jest', { configFile: babelConfig }],
  },
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-contexts)/)'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['packages/**/src/*.js'],
};
