export const vForable = list => list.map((_value, _key) => ({ _value, _key, item: _value, key: _key }))

export function getNested(obj, path, def){
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

