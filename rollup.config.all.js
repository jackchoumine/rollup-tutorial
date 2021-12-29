/*
 * @Description : 打包输出CJS
 * @Date        : 2021-12-30 01:17:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-30 01:52:49 +0800
 * @LastEditors : JackChou
 */
//TODO 打包之前删除上次打包的文件
const formats = [
  { format: 'cjs' },
  //TODO 没挂载到 window 上
  { format: 'iife', name: 'hello' },
  //TODO 不对
  { format: 'umd', name: 'hello' },
  { format: 'system' },
  { format: 'es' },
  { format: 'amd' },
]
export default {
  input: './src/input.js',
  output: formats.map(item => {
    return { file: `./dist/index.${item.format}.js`, ...item }
  }),
}
