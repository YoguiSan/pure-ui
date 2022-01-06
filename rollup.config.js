import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.js',
    watch: true,
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      external(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      resolve({ extensions }),
      commonjs(),
    ],
    external: true,
  },
];
