/*
 * @Description : token 替换
 * @Date        : 2021-10-16 23:56:20 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-17 00:00:03 +0800
 * @LastEditors : JackChou
 */
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

const dev = process.env.NODE_ENV !== 'production'
const sourcemap = dev ? 'inline' : false

// web design token replacements
const tokens = {
  preventAssignment: true,
  __CLOCKSELECTOR__: '.clock',
  __CLOCKINTERVAL__: 1000,
  __CLOCKFORMAT__: 'formatHMS',
}

console.log(`running in ${dev ? 'development' : 'production'} mode`)

export default [
  {
    input: './src/main.js',
    output: {
      file: './tokens/bundle.js',
      format: 'iife',
      sourcemap,
    },
    plugins: [
      replace(tokens),
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
]
