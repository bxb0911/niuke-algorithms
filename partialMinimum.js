const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', function (line) {
  input.push(line.trim())

  if (input.length === 2) {
    const count = input[0]
    const arr = input[1].split(' ').map(n => parseInt(n))
    const result = binarySearch(count, arr)
    console.log(result)
  }
})
function binarySearch(count, arr) {
  let start = 0, end = count - 1, middle, result = -1
  while (end - start >= 0) {
    middle = Math.floor((start + end) / 2)

    if (arr[start] > arr[middle] && arr[middle] < arr[end]) {
      end = middle - 1
      result = middle
    } else {
      start = middle + 1
    }
  }
  return -1
}