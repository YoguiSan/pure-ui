import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

import React from 'react';
import propTypes from 'prop-types';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.js',
    watch: true,
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
      },
    },
    plugins: [
      external(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      }),
      resolve({ extensions }),
      commonjs({
        namedExports: {
          react: Object.keys(React),
          'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
          'react/jsx-dev-runtime': ['jsx', 'jsxs', 'jsxDEV'],
          'prop-types': Object.keys(propTypes),
        },
      }),
    ],
    /*
    external: [
      'react',
      'react-dom',
      'prop-types',
    ],
    */
  },
];
