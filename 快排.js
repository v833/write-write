function quickSort(arr) {
  const length = arr.length
  if (length === 0) return arr

  const midIndex = length >>> 1
  const midValue = arr.splice(midIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat([midValue], quickSort(right))
}

console.log(quickSort([1, 6433, 6, 5, 2, 46, 373, 43, 58, 6, 348, 3, 5462, 46]));