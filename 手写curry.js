function $curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
vv

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = $curry(sum);

console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化