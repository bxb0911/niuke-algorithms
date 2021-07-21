const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = [], count = 0
rl.on('line', function (line) {
  if (!count) {
    count = parseInt(line)
  } else if (input.length === count - 1) {
    input.push(line)
    const res = getMaxStringNumber(input)
    res.forEach(item => console.log(item.slice(-6)))
    input = []
    count = 0
  } else {
    input.push(line)
  }
})

function getMaxStringNumber(arr) {
  return arr.sort((x, y) => parseInt(x.slice(-6)) - parseInt(y.slice(-6)))
}