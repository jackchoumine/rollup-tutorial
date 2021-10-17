(function () {
  'use strict';

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
      console.log('polyfill');
      var t = String(this);
      len = len || 0;
      str = str || ' ';
      while (t.length < len) { t = str + t; }
      return t
    };
  }

  /*
   * @Description :
   * @Date        : 2021-10-15 07:22:30 +0800
   * @Author      : JackChou
   * @LastEditTime: 2021-10-15 07:23:33 +0800
   * @LastEditors : JackChou
   */
  function get(selector, doc) {
    if ( doc === void 0 ) doc = document;

    return doc.querySelector(selector)
  }

  /*
   * @Description :
   * @Date        : 2021-10-15 07:23:58 +0800
   * @Author      : JackChou
   * @LastEditTime: 2021-10-15 07:28:18 +0800
   * @LastEditors : JackChou
   */
  function timePad(n) {
    return ('' + n).padStart(2, '0')
  }

  /**
   * formate HH:MM
   * @param {*} [d=new Date()]
   * @return {*}
   */
  function formatHM(d) {
    if ( d === void 0 ) d = new Date();

    return timePad(d.getHours() + ':' + timePad(d.getMinutes()))
  }

  /**
   * formate HH:MM:SS
   * @param {*} [d=new Date()]
   * @return {*}
   */
  function formatHMS(d) {
    if ( d === void 0 ) d = new Date();

    return formatHM(d) + ':' + timePad(d.getSeconds())
  }

  /*
   * @Description :
   * @Date        : 2021-10-15 07:21:51 +0800
   * @Author      : JackChou
   * @LastEditTime: 2021-10-17 16:02:44 +0800
   * @LastEditors : JackChou
   */

  // get clock element
  var clock = get('.clock');

  if (clock) {
    console.log('initializing clock');

    setInterval(function () {
      clock.textContent = formatHMS();
    }, 1000);
  }

})();
