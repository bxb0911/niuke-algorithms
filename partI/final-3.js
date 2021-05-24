const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', function(line) {
  input.push(line.trim())

  if (input.length === 2) {
    const firstInput = input[0].split(' ')
    const count = parseInt(firstInput[0])
    const target = parseInt(firstInput[1])
    const data = input[1].split(' ').map(item => parseInt(item))
    let start = 0, end = count - 1, middle, result = count + 1
    while (start <= end) {
      middle = start + ((end - start) >> 1)
      if (target <= data[middle]) {
        end = middle - 1
        result = middle + 1
      } else if (target > data[middle]) {
        start = middle + 1
      }
    }
    console.log(result)
  }
})