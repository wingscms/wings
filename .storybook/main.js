const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const packages = fs
  .readdirSync(path.join(__dirname, '..', 'packages'))
  .filter(p => !p.startsWith('.'));

const esc = pkg => pkg.replace('-', '\\-');

const rPkg = new RegExp(`^(@wingscms/(?:${packages.map(esc).join('|')}))$`);

module.exports = {
  webpackFinal: config => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 1000,
    },
    plugins: [
      ...config.plugins,
      // reference module source during development to support coverage reporting
      // also fixes hot reload in storybook
      new webpack.NormalModuleReplacementPlugin(rPkg, resource => {
        resource.request = `${resource.request}/src`;
      }),
    ],
  }),
};
