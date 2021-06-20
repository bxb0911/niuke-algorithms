const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let length
rl.on('line', function (line) {
  if (length) {
    heapSort(line, length)
  } else {
    length = parseInt(line)
  }
})

function heapSort(line, len) {
  let arr = line.split(' ').map(n => parseInt(n))
  heapify(arr, len)
  console.log(arr.join(' '))
}

//       8
//    4     1
//  9   6 6   8
// 9 8 8 6 6 4 1

// 找到大的孩子PK，PK不过就往下移动
function heapify(arr = [], size) {
  heapInsert(arr)
  let last = arr.length - 1, i = last
  while (last - i + 1 < size) {
    swap(arr, 0, i)
    heapInsert(arr, i)
    i--;
  }
}

// 跟父节点比较，若值比父节点大进行交换
function heapInsert(arr = [], len = arr.length) {
  for (let i = 1; i < len; i++) {
    let cur = i, p = cur - 1 >> 1
    while (p >= 0) {
      if (arr[cur] > arr[p]) {
        swap(arr, cur, p)
        cur = p
        p = cur - 1 >> 1
      } else {
        break
      }
    }
  }
  return arr
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}