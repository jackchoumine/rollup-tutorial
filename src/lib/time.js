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
export function formatHM(d = new Date()) {
  return timePad(d.getHours() + ':' + timePad(d.getMinutes()))
}

/**
 * formate HH:MM:SS
 * @param {*} [d=new Date()]
 * @return {*}
 */
export function formatHMS(d = new Date()) {
  return formatHM(d) + ':' + timePad(d.getSeconds())
}
