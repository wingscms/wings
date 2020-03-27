const path = require('path');

const babelConfig = path.join(__dirname, '.babelrc');

const ignorePackages = ['hummingbird', 'gatsby-starter-hummingbird'];
const packagesDir = '<rootDir>/packages';

module.exports = {
  transform: {
    '\\.js$': ['babel-jest', { configFile: babelConfig }],
  },
  testPathIgnorePatterns: [
    ...ignorePackages.map(p => path.join(packagesDir, p)),
    // more
  ],
};
