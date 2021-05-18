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
  let start = 0, end = count - 1, middle
  if (end >= 1 && arr[0] < arr[1]) {
    return 0
  } else if (arr[end - 1] > arr[end]) {
    return end
  } else {
    while (end > start + 1) {
      middle = Math.floor((start + end) / 2)
      if (arr[middle - 1] > arr[middle] && arr[middle] < arr[middle + 1]) {
        return middle
      } else if (arr[middle - 1] < arr[middle]) {
        end = middle
      } else if (arr[middle] > arr[middle + 1]) {
        start = middle
      }
    }
  }
  return -1
}