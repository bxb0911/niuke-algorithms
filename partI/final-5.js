// 编写一个程序，将输入字符串中的字符按如下规则排序。

// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。
// 如，输入： By?e 输出： Be?y

function strSort(str) {
  let arr = str.split('')
  split(arr, 0, arr.length)
  let result = ''
  for (let i = 0, j = 0, len = str.length; i < len; i++) {
    if (!isA2Z(str[i])) {
      result += str[i]
    } else {
      result += arr[j++]
    }
  }
  console.log(result)
}

function split(arr, start, end) {
  if (start === end) return
  let mid = start + ((end - start) >> 1)
  split(arr, start, mid)
  split(arr, mid + 1, end)
  merge(arr, start, mid, end)
}

function merge(arr, start, mid, end) {
  let newArr = new Array(end - start + 1), i = 0, j = mid + 1
  while (start <= mid && j <= end) {
    if ((arr[start] <= arr[j] && isA2Z(arr[start])) || isSame(arr[start], arr[j])) {
      newArr[i++] = arr[start++]
    } else if (arr[start] > arr[j] && isA2Z(arr[j])) {
      newArr[i++] = arr[j++]
    } else {
      break;
    }
  }

  while (start <= mid && isA2Z(arr[start])) {
    newArr[i++] = arr[start++]
  }

  while (j <= end && isA2Z(arr[j])) {
    newArr[i++] = arr[j++]
  }

  for (let i = 0, len = newArr.length; i < len; i++) {
    arr[i + start] = temp[i]
  }
}

function isA2Z(char) {
  return char.charCodeAt() >= 65 && char.charCodeAt() <= 122
}

function isSame(c1, c2) {
  return isA2Z(c1) && isA2Z(c2) && Math.abs(c1 - c2) === 32
}

function swap(arr, i, j) {
  if (i === j) return
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}