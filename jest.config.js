const path = require('path');

const babelConfig = path.join(__dirname, '.babelrc');

const ignorePackages = [];
const packagesDir = '<rootDir>/packages';

module.exports = {
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  transform: {
    '\\.js$': ['babel-jest', { configFile: babelConfig }],
  },
  testPathIgnorePatterns: [
    ...ignorePackages.map(p => path.join(packagesDir, p)),
    // more
  ],
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-contexts)/)'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
