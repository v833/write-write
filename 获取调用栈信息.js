function getStack(fn) {
  const stack = []
  let caller = fn.caller
  while (caller) {
    stack.unshift(caller.name)
    caller = caller.caller
  }

  return stack
}

function a() {
  // console.log(a);
  const stack = getStack(a)
  console.log('stack: ', stack);
}

function b() {
  // console.log(b);
  a()
}

function c() {
  // console.log(c);
  b()
}

c()