const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let length
rl.on('line', function (line) {
  if (length) {
    radixSort(line, length)
  } else {
    length = parseInt(line)
  }
})

// [023 022 031 100]
//        0 1 2 3 4 5 6 7 8 9
// count [1 1 1 1 0 0 0 0 0 0]
// count`[0 1 2 3 4 4 4 4 4 4]
// [100 031 022 023]
// count [1 0 2 1 0 0 0 0 0 0]
// count`[0 1 1 3 4 4 4 4 4 4]
// [100 022 023 031]
// count [3 1 0 0 0 0 0 0 0 0]
// count`[0 3 4 4 4 4 4 4 4 4]
// [022 023 031 100]

function radixSort(data, len) {
  let arr = data.split(' ').map(m => parseInt(m))
  let digits = (Math.max(...arr) + '').length
  arr = arr.map(m => (m + '').padStart(digits, '0'))
  let radix = 10
  let bucket = new Array(len)
  for (let i = digits - 1; i >= 0; i--) {
    let count = new Array(radix).fill(0)
    for (let j = 0; j < len; j++) {
      let cur = parseInt(arr[j][i])
      count[cur] = count[cur] + 1
    }
    let count1 = new Array(radix).fill(0)
    count1[0] = count[0]
    for (let k = 1; k < radix; k++) {
      count1[k] = count[k] + count1[k - 1]
    }
    for (let l = len - 1; l >= 0; l--) {
      let cur = parseInt(arr[l][i])
      count1[cur] = count1[cur] - 1
      bucket[count1[cur]] = arr[l]
    }
    for (let m = 0; m < len; m++) {
      arr[m] = bucket[m]
    }
  }
  console.log(arr.map(m => parseInt(m)).join(' '))
}