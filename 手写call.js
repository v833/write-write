function $callES6(context) {
  context = context || globalThis
  context.fn = this
  let arg = [...arguments].slice(1)
  const res = context.fn(...arg)
  delete context.fn
  return res
}

function $callES5(context) {
  context = context || globalThis
  context.fn = this
  var arr = []
  for (let i = 0; i < arguments.length; i++) {
    arr.push('arguments[' + i + ']')
  }
  var res = eval('context.fn(' + arr + ')')
  delete context.fn
  return res
}

function createFun(argsLength) {
  // return ctx[propertyName](arg1, arg2, arg3...)
  var code = 'return ctx[propertyName]('
  for (let i = 0; i < argsLength; i++) {
    if (i > 0) {
      code += ','
    }
    code += 'args[' + i + ']'
  }
  code += ')'

  return new Function('ctx', 'property', 'args', code)
}