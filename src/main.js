/*
 * @Description :
 * @Date        : 2021-10-15 07:21:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 07:31:16 +0800
 * @LastEditors : JackChou
 */
import * as dom from './lib/dom.js'
import { formatHMS } from './lib/time.js'

// get clock element
const clock = dom.get('.clock')

if (clock) {
  console.log('initializing clock')
  // update clock every second
  setInterval(() => {
    clock.textContent = formatHMS()
  }, 1000)
}
