/*
 * @Description :
 * @Date        : 2021-10-15 07:21:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 23:40:35 +0800
 * @LastEditors : JackChou
 */
import * as dom from './lib/dom.js'
import dayjs from 'dayjs'
// get clock element
const clock = dom.get('.clock')

if (clock) {
  console.log('initializing clock')
  // update clock every second
  setInterval(() => {
    clock.textContent = dayjs().format('HH:mm:ss')
  }, 1000)
}
