module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: 'problems',
  plugins: ['prettier', 'react'],
  rules: {
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  globals: {
    graphql: true,
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
};
