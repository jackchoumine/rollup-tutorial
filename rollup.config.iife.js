/*
 * @Description : rollup 配置
 * @Date        : 2021-10-15 23:15:40 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 23:26:26 +0800
 * @LastEditors : JackChou
 */
export default {
  input: './src/main.js',
  output: {
    file: './iife/bundle.js',
    format: 'iife',
    sourceMap: true,
  },

  watch: {
    include: './src/**',
    cleanScreen: false,
  },
}
