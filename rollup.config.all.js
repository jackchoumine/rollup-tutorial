/*
 * @Description : 打包输出CJS
 * @Date        : 2021-12-30 01:17:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-06-05 07:56:08 +0800
 * @LastEditors : JackChou
 */

import typescript from '@rollup/plugin-typescript'

const formats = [
  { format: 'cjs' },
  // NOTE iife、umd 需要提供导出的名字
  {
    format: 'iife',
    name: 'hello',
    //NOTE 给打包输出注入注释
    banner: '/* library version 5 */',
    // TODO
    // globals: {
    //   jquery: '@',
    // },
  },
  { format: 'umd', name: 'hello' },
  { format: 'system' },
  { format: 'esm' },
  { format: 'amd' },
]
export default {
  input: './src/input.ts',
  output: formats.map(item => {
    return { file: `./dist/index.${item.format}.js`, ...item }
  }),
  plugins: [typescript()],
}
