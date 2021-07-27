const { getLinkList, linkedList2Array } = require('./utils')

function swap(arr, x, y) {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

function partition(head, x) {
  // write code here
  let data = linkedList2Array(head)
  let L = -1, cur = 0, len = data.length
  while (cur < len) {
    if (data[cur] < x) {
      swap(data, cur, L + 1)
      L++;
    }
    cur++;
  }
  console.log(data)
}

partition(getLinkList([1, 4, 3, 2, 5, 2]), 3)


