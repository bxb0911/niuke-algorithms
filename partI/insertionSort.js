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
      let j = i + 1
      while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
        j--;
      }
    }
    console.log(arr.join(' '))
  }
})
