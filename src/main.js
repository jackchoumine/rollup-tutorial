import * as dom from './lib/dom.js'
import dayjs from 'dayjs'

// get clock element
const clock = dom.get('.clock')

if (clock) {
  console.log('initializing clock...')

  // update clock every second
  setInterval(() => {
    clock.textContent = dayjs().format('HH:mm:ss')
  }, 1000)
}
