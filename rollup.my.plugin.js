/*
 * @Description :
 * @Date        : 2022-06-05 05:26:19 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-06-05 05:29:22 +0800
 * @LastEditors : JackChou
 */
import myPlugin from './plugin/myPlugin.js'
export default {
  input: 'src/myInput.js',
  output: { file: 'my-plugin/index.js' },
  plugins: [myPlugin()],
}
