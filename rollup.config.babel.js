/*
 * @Author      : ZhouQiJun
 * @Date        : 2021-10-17 16:01:29
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-05-05 01:38:21
 * @Description : 配置 babel 插件
 */
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-buble'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

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

console.log(`running in ${dev ? 'development' : 'production'} mode  `)

export default [
  {
    // ES6 output
    input,
    output: {
      file: './es6/bundle.js',
      format: 'esm',
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
      // terser({
      //   ecma: 2018,
      //   mangle: { toplevel: true },
      //   compress: {
      //     module: true,
      //     toplevel: true,
      //     unsafe_arrows: true,
      //     drop_console: !dev,
      //     drop_debugger: !dev,
      //   },
      //   output: { quote_style: 1 },
      // }),
    ],
    watch,
  },
  {
    // ES5 output
    input,
    output: {
      file: './es5/bundle.js',
      format: 'es',
      sourcemap,
    },
    plugins: [
      replace({
        ...tokens,
        __POLYFILL__: "import './lib/polyfill.js';",
      }),
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      }),
      resolve({
        browser: true,
      }),
      commonjs(),
      babel(),
      // terser({
      //   ecma: 2015,
      //   mangle: { toplevel: true },
      //   compress: {
      //     toplevel: true,
      //     drop_console: !dev,
      //     drop_debugger: !dev,
      //   },
      //   output: { quote_style: 1 },
      // }),
    ],
    watch,
  },
]
