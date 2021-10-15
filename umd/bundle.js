(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  /*
   * @Description :
   * @Date        : 2021-10-15 07:22:30 +0800
   * @Author      : JackChou
   * @LastEditTime: 2021-10-15 07:23:33 +0800
   * @LastEditors : JackChou
   */
  function get(selector, doc = document) {
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
  function formatHM(d = new Date()) {
    return timePad(d.getHours() + ':' + timePad(d.getMinutes()))
  }

  /**
   * formate HH:MM:SS
   * @param {*} [d=new Date()]
   * @return {*}
   */
  function formatHMS(d = new Date()) {
    return formatHM(d) + ':' + timePad(d.getSeconds())
  }

  /*
   * @Description :
   * @Date        : 2021-10-15 07:21:51 +0800
   * @Author      : JackChou
   * @LastEditTime: 2021-10-15 07:31:16 +0800
   * @LastEditors : JackChou
   */

  // get clock element
  const clock = get('.clock');

  if (clock) {
    console.log('initializing clock');
    // update clock every second
    setInterval(() => {
      clock.textContent = formatHMS();
    }, 1000);
  }

}));
