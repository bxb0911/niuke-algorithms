const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const input = []
rl.on('line', function (line) {
  input.push(line.trim())

  if (input.length === 2) {
    const arr = input[1].split(' ').map(n => parseInt(n))
    const result = arr.reduce((acc, cur) => acc ^ cur)
    console.log(result)
  }
})