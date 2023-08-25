import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import {terser} from 'rollup-plugin-terser'

export default async () => {
  const external = Object.keys(require('./package.json').dependencies || {})

  return {
    input: {
      index: './index.js',
      'all': './lib/all.js',
      'common': './lib/common.js',
      'core': './lib/core.js'
    },
    output: [
      {
        dir: './dist/es',
        format: 'es'
      },
      {
        dir: './dist/lib',
        format: 'cjs'
      }
    ],
    plugins: [
      resolve({
        preferBuiltins: false
      }),
      commonjs({include: 'node_modules/**'}),
      babel({
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {modules: false, targets: {chrome: 70}}]
        ]
      }),
      terser()
    ],
    external: external
  }
}
