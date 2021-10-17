/*
 * @Description :
 * @Date        : 2021-10-15 07:21:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-17 16:02:44 +0800
 * @LastEditors : JackChou
 */
__POLYFILL__
import * as dom from './lib/dom.js'
import { __CLOCKFORMAT__ } from './lib/time.js'

// get clock element
const clock = dom.get('__CLOCKSELECTOR__')

if (clock) {
  console.log('initializing clock')

  setInterval(() => {
    clock.textContent = __CLOCKFORMAT__()
  }, __CLOCKINTERVAL__)
}
