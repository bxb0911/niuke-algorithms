const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line.trim())
  const count = parseInt(input[0])
  if (input.length - 2 === count) {
    const sortType = parseInt(input[1])
    const source = input.slice(2).map(item => {
      let itemArr = item.split(' '), obj = {}
      obj[itemArr[0]] = parseInt(itemArr[1])
      return obj
    })
    const result = sort(source, count, sortType)
    const resStrArr = result.map(item => getFirstKey(item) + ' ' + getFirstValue(item))
    console.log(resStrArr.join('\n'))
    input = []
  }
})

function sort(data, count, sortType) {
  for (let i = 1; i < count; i++) {
    let j = i;
    while (j > 0) {
      let left = getFirstValue(data[j - 1])
      let right = getFirstValue(data[j])
      if ((sortType === 1 && left <= right) || (sortType === 0 && left >= right)) break
      temp = data[j - 1]
      data[j - 1] = data[j]
      data[j] = temp
      j--
    }
  }
  return data
}

function getFirstKey(obj) {
  return Object.keys(obj)[0]
}

function getFirstValue(obj) {
  return obj[getFirstKey(obj)]
}
