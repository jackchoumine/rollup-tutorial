import * as dom from './lib/dom.js'
import dayjs from 'dayjs'

// get clock element
const clock = dom.get('__clock_selector')

console.log('aB_e')

if (clock) {
  console.log('initializing clock...')

  // update clock every second
  setInterval(() => {
    clock.textContent = dayjs().format('__time_format')
  }, __clock_interval)
}
