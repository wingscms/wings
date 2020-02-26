import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const externals = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)];

export default [
  {
    input: 'src/index.js',
    output: {
      sourcemap: true,
      file: pkg.main,
      format: 'cjs',
    },
    external: id => externals.some(dep => id.startsWith(dep)),
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
