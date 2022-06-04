import * as dom from './lib/dom.js'
import { formatHMS } from './lib/time.js'

// get clock element
const clock = dom.get('.clock')

if (clock) {
  console.log('initializing clock...')

  // update clock every second
  setInterval(() => {
    clock.textContent = formatHMS()
  }, 1000)
}
