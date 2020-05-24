/**
 * gets value of nested property
 *
 * @param obj {object|array}
 * @param path {string}
 * @param def - default value
 * @returns {*}
 */
export function getNested(obj, path, def = undefined){
  let key, val = obj
  let arr = String(path)
    .replace(/'|"|\]/g,'')
    .replace(/\[/g,'.')
    .split('.')
  while ((key = arr.shift()) && 'object' === typeof val && val) {
    val = undefined === val[key] ? def : val[key]
  }
  return val
}

