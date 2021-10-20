/*
 * @Description : rollup 配置
 * @Date        : 2021-10-15 23:15:40 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-21 01:29:02 +0800
 * @LastEditors : JackChou
 */

import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

const dev = process.env.NODE_ENV !== 'production'
const sourceMap = dev ? 'inline' : false

// web design token replacements
const tokens = {
  preventAssignment: true,
  __CLOCKSELECTOR__: '.clock',
  __CLOCKINTERVAL__: 1000,
  __CLOCKFORMAT__: 'formatHMS',
}

console.log(`running in ${dev ? 'development' : 'production'} mode`)

export default {
  input: './src/main.js',
  output: [
    {
      file: './system/bundle.js',
      format: 'system',
      sourceMap,
      plugins: [
        // resolve({
        //   browser: true,
        // }),
        // commonjs(),
        // replace(tokens),
      ],
    },
  ],
}
