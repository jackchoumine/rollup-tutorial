import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-buble'
const dev = process.env.NODE_ENV !== 'production'
const sourcemap = dev ? 'inline' : false

// web design token replacements
const tokens = {
  preventAssignment: true,
  __CLOCKSELECTOR__: '.clock',
  __CLOCKINTERVAL__: 1000,
  __CLOCKFORMAT__: 'formatHMS',
}

const input = './src/main.js'
const watch = { clearScreen: false }

console.log(`running in ${dev ? 'development' : 'production'} mode`)

export default [
  {
    // ES6 output
    input,
    output: {
      file: './es6/bundle.mjs',
      format: 'iife',
      sourcemap,
    },
    plugins: [
      replace({
        ...tokens,
        __POLYFILL__: '',
      }),
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
    watch,
  },
  {
    // ES5 output
    input,
    output: {
      file: './es5/bundle.js',
      format: 'iife',
      sourcemap,
    },
    plugins: [
      replace({
        ...tokens,
        __POLYFILL__: "import './lib/polyfill.js';",
      }),
      resolve({
        browser: true,
      }),
      commonjs(),
      babel(),
    ],
    watch,
  },
]
