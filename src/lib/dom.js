/*
 * @Description :
 * @Date        : 2021-10-15 07:22:30 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-10-15 07:23:33 +0800
 * @LastEditors : JackChou
 */
export function get(selector, doc = document) {
  return doc.querySelector(selector)
}
export function getAll(selector, doc = document) {
  return doc.querySelectorAll(selector)
}
