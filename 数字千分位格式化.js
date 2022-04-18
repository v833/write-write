function format(num) {
  let res = ''
  const s = num.toString()
  const length = s.length

  for (let i = length - 1; i >= 0; i--) {
    const j = length - i
    if (j % 3 === 0 && i !== 0) {
      res = ',' + s[i] + res
    } else {
      res = s[i] + res
    }
  }

  return res
}

console.log(format(1233455671));