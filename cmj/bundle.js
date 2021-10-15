'use strict';

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

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
 * @Date        : 2021-10-15 07:21:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 23:40:35 +0800
 * @LastEditors : JackChou
 */
// get clock element
const clock = get('.clock');

if (clock) {
  console.log('initializing clock');
  // update clock every second
  setInterval(() => {
    clock.textContent = dayjs__default["default"]().format('HH:mm:ss');
  }, 1000);
}
