/*
 * @Description : polyfill
 * @Date        : 2021-10-17 16:02:57 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-17 16:11:07 +0800
 * @LastEditors : JackChou
 */
// String.padStart polyfill
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(len, str) {
    console.log('polyfill')
    var t = String(this)
    len = len || 0
    str = str || ' '
    while (t.length < len) t = str + t
    return t
  }
}
