/*
 * @Description : rollup 配置
 * @Date        : 2021-10-15 23:15:40 +0800
 * @Author      : JackChou
 * @LastEditTime: 2023-05-05 01:31:56
 * @LastEditors : ZhouQiJun
 */
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const dev = process.env.NODE_ENV !== 'production'
const sourceMap = dev ? 'inline' : false
console.log(`running in ${dev ? 'development' : 'production'} mode \n `)

export default [
  {
    input: './src/main.js',
    output: {
      file: './cmj/bundle.js',
      format: 'iife',
      sourcemap: sourceMap,
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
  {
    input: './src/main.js',
    output: {
      file: './cmj/bundle.js',
      format: 'cjs',
      name: 'test',
      sourcemap: sourceMap,
    },
  },
  {
    input: './src/main.js',
    output: {
      file: './umd/bundle.js',
      format: 'umd',
      // sourceMap: sourceMap,
    },
  },
]
