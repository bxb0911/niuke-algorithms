const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());

  if (input.length === 2) {
    const firstInput = input[0].split(" ");
    const count = parseInt(firstInput[0]);
    const arr = input[1].split(" ").map((n) => parseInt(n));
    const result = quickSort(arr, count);
    console.log(result);
  }
});

function quickSort(arr, len) {
  if (arr === null || len < 2) return
  processData(arr, 0, len - 1)
  return arr.join(' ')
}

function processData(arr, l, r) {
  if (l < r) {
    swap(arr, l + (Math.random() * (r - l + 1) >> 1), r)
    let p = partition(arr, l, r)
    processData(arr, l, p[0] - 1)
    processData(arr, p[1] + 1, r)
  }
}

function partition(arr, l, r) {
  let left = l - 1, right = r, target = arr[r]
  while (l < right) {
    if (arr[l] > target) {
      swap(arr, l, --right)
    } else if (arr[l] < target) {
      swap(arr, l++, ++left)
    } else {
      l++
    }
  }
  swap(arr, r, right)
  return [left + 1, right]
}

function swap(arr, i, j) {
  if (i === j) return
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

