import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    external: [
      'apollo-link-http',
      'apollo-server-lambda',
      'graphql-request',
      'graphql-tools',
      'node-fetch',
    ],
    plugins: [
      resolve(),
      commonjs({
        include: '../../node_modules/**',
      }),
      babel({
        exclude: '../../node_modules/**',
        runtimeHelpers: true,
      }),
    ],
  },
];
