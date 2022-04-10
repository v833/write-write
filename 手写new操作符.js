function $new(constructor) {
  if (typeof constructor !== 'function') throw new Error('TypeError')
  const slice = Array.prototype.slice
  const args = slice.call(arguments, 1)
  // 创建一个空对象
  const obj = {}
  // 设置空对象的原型
  Object.setPrototypeOf(obj, constructor.prototype)
  // 另一种写法 const obj = Object.create(constructor.prototype)
  // 执行构造函数方法，把相关的属性和方法添加到对象上
  const res = constructor.apply(obj, args)
  // 返回对象 如果构建函数返回的值是对象类型，就直接返回该对象 反之返回创建的对象
  return res instanceof Object ? res : obj
}

function Person1(name) {
  this.name = name
}

function Person2(name) {
  this.name = name
  return {
    name: 'haha~'
  }
}
const a = $new(Person1, 'a')
const b = $new(Person2, 'b')

console.log(a);
console.log(b);