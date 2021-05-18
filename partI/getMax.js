const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', function (line) {
  input.push(line.trim())

  if (input.length === 2) {
    const count = parseInt(input[0])
    const arr = input[1].split(' ').map(n => parseInt(n))
    const max = findMax(arr, 0, count - 1)
    console.log(max)
  }
})

function findMax(arr, left, right) {
  if (left === right) {
    return arr[left]
  }
  let middle = left + ((right - left) >> 1)
  let leftMax = findMax(arr, left, middle)
  let rightMax = findMax(arr, middle + 1, right)
  return Math.max(leftMax, rightMax)
}