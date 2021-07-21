const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line.trim())
  const first = input[0].split(' ')
  const count = parseInt(first[0])
  const buyCount = parseInt(first[1])
  if (input.length - 1 === count) {
    const result = total(input.slice(1), buyCount)
    console.log(result)
    input = []
  }
})

function sort(arr) {
  arr.sort(function (a, b) {
    let aArr = a.split(' ')
    let bArr = b.split(' ')
    if (parseInt(aArr[2]) === parseInt(bArr[2])) {
      if (aArr[1] < bArr[1]) {
        return -1
      }
      if (aArr[1] > bArr[1]) {
        return 1
      }
      return 0
    } else {
      return parseInt(aArr[2]) - parseInt(bArr[2])
    }
  })
  return arr
}

function total(arr, count) {
  const newArr = sort(arr)
  count = Math.min(count, arr.length)
  let totalPrice = 0
  for (let i = 0; i < count; i++) {
    totalPrice += parseInt(newArr[i].split(' ')[2])
  }
  return totalPrice
}