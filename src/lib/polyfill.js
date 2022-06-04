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
