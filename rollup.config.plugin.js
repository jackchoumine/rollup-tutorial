/*
 * @Description : 使用插件
 * @Date        : 2021-10-16 23:44:25 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-16 23:51:40 +0800
 * @LastEditors : JackChou
 */
// NOTE 定位 node_modules 的目录
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
// NOTE 转 commonjs 到 esm
import commonjs from '@rollup/plugin-commonjs'

const dev = process.env.NODE_ENV !== 'production'
const sourcemap = dev ? 'inline' : false
console.log(`running in ${dev ? 'development' : 'production'} mode`)

export default [
  {
    input: './src/main.js',
    output: {
      file: './plugin/bundle.js',
      format: 'iife',
      sourcemap,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
    watch: {
      include: './src/**',
      cleanScreen: false,
    },
  },
]
