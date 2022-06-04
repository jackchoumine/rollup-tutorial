export function get(selector, doc = document) {
  return doc.querySelector(selector)
}
export function getAll(selector, doc = document) {
  return doc.querySelectorAll(selector)
}
