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
      for (let j = 1; j < count - i; j++) {
        if (arr[j - 1] > arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }
    console.log(arr.join(' '))
  }
})
