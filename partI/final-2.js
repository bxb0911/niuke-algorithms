// 3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
function Find(target, array) {
  for (let i = 0, len = array.length; i < len; i++) {
    if (binarySearch(target, array[i])) {
      return true
    }
  }
  return false
}

function binarySearch(target, arr) {
  let start = 0, end = arr.length - 1, mid
  while (end >= start) {
    mid = start + ((end - start) >> 2)
    if (target === arr[mid]) {
      return true
    } else if (target < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return false
}

console.log(Find(1,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));

module.exports = {
  Find: Find
};