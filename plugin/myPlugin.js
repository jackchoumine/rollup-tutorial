/*
 * @Description : rollup 插件
 * @Date        : 2022-06-05 05:22:05 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-06-05 05:38:15 +0800
 * @LastEditors : JackChou
 */
export default function myExample() {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    options(options) {
      console.log(options)
      return options
    },
    resolveId(source) {
      console.log(source)
      if (source === 'virtual-module') {
        return source // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null // other ids should be handled as usually
    },
    load(id) {
      console.log(id)
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"' // the source code for "virtual-module"
      }
      return null // other ids should be handled as usually
    },
  }
}
