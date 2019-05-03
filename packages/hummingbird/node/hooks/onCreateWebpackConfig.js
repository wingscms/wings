module.exports = ({ stage, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-scroll-to-element/,
            loader: 'null-loader',
          },
          {
            test: /typeit/,
            loader: 'null-loader',
          },
        ],
      },
    });
  }
};
