const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let length
rl.on('line', function (line) {
  if (length) {
    mergeSort(line, length)
  } else {
    length = parseInt(line)
  }
})

function mergeSort(line, length) {
  let arr = line.split(' ').map(n => parseInt(n))
  split(0, arr.length - 1, arr)
  console.log(arr.join(' '))
}

function split(left, right, arr) {
  if (left === right) {
    return
  }
  let middle = left + ((right - left) >> 1)
  split(left, middle, arr)
  split(middle + 1, right, arr)
  merge(left, middle, right, arr)
}

function merge(left, middle, right, arr) {
  let temp = new Array(right - left + 1)
  let i = 0, l = left, r = middle + 1
  while (l <= middle && r <= right) {
    temp[i++] = arr[l] < arr[r] ? arr[l++] : arr[r++]
  }
  while (l <= middle) {
    temp[i++] = arr[l++]
  }
  while (r <= right) {
    temp[i++] = arr[r++]
  }
  for (let i = 0, len = temp.length; i < len; i++) {
    arr[i + left] = temp[i]
  }
  return arr
}