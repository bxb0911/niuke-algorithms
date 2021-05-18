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
    for (let i = 0; i < count - 1; i++) {
      let target = i
      for (let j = i + 1; j < count; j++) {
        if (arr[j] < arr[target]) {
          target = j
        }
      }
      let temp = arr[target]
      arr[target] = arr[i]
      arr[i] = temp
    }
    console.log(arr.join(' '))
  }
})