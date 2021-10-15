/*
 * @Description : rollup 配置
 * @Date        : 2021-10-15 23:15:40 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 23:37:11 +0800
 * @LastEditors : JackChou
 */
const dev = process.env.NODE_ENV !== 'production'
const sourceMap = dev ? 'inline' : false
console.log(sourceMap)
export default [
  {
    input: './src/main.js',
    output: {
      file: './cmj/bundle.js',
      format: 'cjs',
      // sourceMap: sourceMap,
    },
    watch: {
      include: './src/**',
      cleanScreen: false,
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
