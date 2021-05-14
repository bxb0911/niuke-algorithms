const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', function (line) {
  input.push(line.trim())

  if (input.length === 2) {
    const firstInput = input[0].split(' ')
    const count = parseInt(firstInput[0])
    const target = parseInt(firstInput[1])
    const arr = input[1].split(' ').map(n => parseInt(n))
    const result = binarySearch(target, count, arr)
    console.log(result)
  }
})
function binarySearch(target, count, arr) {
  let start = 0, end = count - 1, middle
  while (end - start >= 0) {
    middle = Math.floor((start + end) / 2)
    if (target === arr[middle]) return middle
    if (target > arr[middle]) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return -1
}