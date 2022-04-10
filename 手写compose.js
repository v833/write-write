function $compose(...fns) {
  if (fns.length === 0) {
    return arg => arg
  }
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

function $pipe(...fns) {
  if (fns.length === 0) {
    return arg => arg
  }
  return fns.reduceRight((a, b) => (...args) => a(b(...args)))
}

function discount(x) {
  return x * 0.9
}

function reduce(x) {
  return x > 200 ? x - 50 : x
}

function discountPlus(x) {
  return x * 0.95
}

const getPrice = $compose(discountPlus, reduce, discount)
console.log('getPrice: ', getPrice(200));
console.log('getPrice: ', getPrice(250));