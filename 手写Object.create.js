// 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
function $create(proto, properties) {
  if (typeof proto !== 'object') throw new Error('typeError')

  function F() {}
  F.prototype = proto
  const obj = new F()
  if (properties) {
    Object.defineProperties(obj, properties)
  }
  return obj
}


const obj = {
  a: 1,
  b: 2
}

const res = $create(obj, {
  'c': {
    value: 3,
    enumerable: true,
    writable: true,
    configurable: true
  },
})

console.log(res.a);
console.log(res.b);
console.log(res.c);