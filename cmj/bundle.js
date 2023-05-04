'use strict';

var dayjs = require('dayjs');

function get(selector, doc = document) {
  return doc.querySelector(selector)
}

// get clock element
const clock = get('__clock_selector');

console.log('aB_e');

if (clock) {
  console.log('initializing clock...');

  // update clock every second
  setInterval(() => {
    clock.textContent = dayjs().format('__time_format');
  }, __clock_interval);
}
