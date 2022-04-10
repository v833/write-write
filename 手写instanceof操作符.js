function $instanceof(v, target) {
  if (typeof target !== 'function' || target === null) throw new Error('TypeError')
  let proto = Object.getPrototypeOf(v)
  let prototype = target.prototype
  while (true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

const arr = [1, 2, 3]
console.log($instanceof(arr, Array));
console.log($instanceof(arr, Object));