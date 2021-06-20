// 对于一个无序数组A，请设计一个算法，求出需要排序的最短子数组的长度。
// 给定一个整数数组A及它的大小n，请返回最短子数组的长度。
// 测试样例：
// [1,5,3,4,2,6,7],7
// 返回：4

// function getMinSubArr(arr, count) {
//   let origin = arr.slice(), newArr = heapSort(arr, count)
//   let left = 0, right = count - 1, i = 0;
//   while (left < right && i < count) {
//     let j = count - 1 - i
//     if (origin[i] !== newArr[i] && left === 0) {
//       left = i;
//     }
//     if (origin[j] !== newArr[j] && right === count - 1) {
//       right = j
//     }
//     i++
//   }
//   return right - left + 1
// }

// function heapSort(arr, count = arr.length) {
//   heapInsert(arr, count)
//   let last = count - 1, i = last
//   while (i > 0) {
//     swap(arr, 0, i)
//     heapInsert(arr, i)
//     i--;
//   }
//   return arr
// }

// function heapInsert(arr, count) {
//   for (let i = 1; i < count; i++) {
//     let cur = i, p = i - 1 >> 1
//     while (p >= 0) {
//       if (arr[cur] > arr[p]) {
//         swap(arr, cur, p)
//         cur = p
//         p = cur - 1 >> 1
//       } else {
//         break;
//       }
//     }
//   }
// }

// function swap(arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }

// getMinSubArr([1,5,3,4,2,6,7], 7)

function findShortest(arr, count) {
  let left = -1, max = arr[0]
  for (let i = 1; i < count; i++) {
    if (arr[i] >= max) {
      max = arr[i]
    } else {
      left = i
    }
  }
  if (left == -1) {
    return 0
  }
  let right = -1, min = arr[count - 1]
  for (let j = count - 2; j >= 0; j--) {
    if (arr[j] <= min) {
      min = arr[j]
    } else {
      right = j
    }
  }
  return left - right + 1
}