import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      sourcemap: true,
      file: pkg.main,
      format: 'cjs',
    },
    external: ['react', 'react-dom'],
    plugins: [
      commonjs({
        include: '../../node_modules/**',
      }),
      babel({
        exclude: '../../node_modules/**',
        runtimeHelpers: true,
        configFile: '../../.babelrc',
      }),
    ],
  },
];
