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
    const eor = arr.reduce((acc, cur) => acc ^ cur)
    const rightOne = eor & (~eor + 1)
    let first = 0
    arr.forEach(item => {
      item & rightOne && (first = item ^ first)
    })
    const second = eor ^ first
    first < second ? console.log(first + ' ' + second) : console.log(second + ' ' + first)
  }
})