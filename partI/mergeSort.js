let arr = [8, 4, 1]

function split(left, right) {
  if (left === right) {
    return
  }
  let middle = left + ((right - left) >> 1)
  split(left, middle)
  split(middle + 1, right)
  merge(left, middle, right)
}

function merge(left, middle, right) {
  console.log(left, middle, right)
  let temp = new Array(right - left + 1)
  for (let i = left, l = left, r = middle + 1, len = temp.length; i < len; i++) {
    if (l > middle || arr[l] > arr[r]) {
      console.log('before-up', i, r)
      temp[i] = arr[r++]
      console.log('after-up', i, r)
    } else if (r > right || arr[l] <= arr[r]) {
      console.log('before-down', i, l)
      temp[i] = arr[l++]
      console.log('after-down', i, l)
    }
  }
  arr = temp.slice()
}

split(0, arr.length - 1)
console.log(arr)