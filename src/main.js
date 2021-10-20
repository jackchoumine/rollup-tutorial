/*
 * @Description :
 * @Date        : 2021-10-15 07:21:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-21 01:27:49 +0800
 * @LastEditors : JackChou
 */
__POLYFILL__
import * as dom from './lib/dom.js'
import { formatHMS } from './lib/time.js'

// get clock element
const clock = dom.get('__CLOCKSELECTOR__')

if (clock) {
  console.log('initializing clock')

  setInterval(() => {
    clock.textContent = formatHMS()
  }, __CLOCKINTERVAL__)
}
