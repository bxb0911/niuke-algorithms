const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line.trim());

  if (input.length === 3) {
    const count = parseInt(input[0]);
    const arr = input[1].split(" ").map((n) => parseInt(n));
    const type = parseInt(input[2]);
    quickSort(arr, count, type);
    input = [];
  }
});

function quickSort(arr, count, type) {
  if (arr === null || count < 2) return
  processData(arr, 0, count - 1, type)
  console.log(arr.join(' '))
}

function processData(arr, L, R, type) {
  if (L < R) {
    swap(arr, L + (Math.random() * (R - L + 1) >> 1), R)
    let [left, right] = partition(arr, L, R, type)
    processData(arr, L, left, type)
    processData(arr, right, R, type)
  }
}

function partition(arr, L, R, type) {
  let left = L - 1, right = R, target = arr[R]
  while (L < right) {
    if (arr[L] > target) {
      type === 0 ? swap(arr, L, --right) : swap(arr, L++, ++left)
    } else if (arr[L] < target) {
      type === 0 ? swap(arr, L++, ++left) : swap(arr, L, --right)
    } else {
      L++
    }
  }
  swap(arr, R, right)
  return [left, right + 1]
}

function swap(arr, i, j) {
  if (i === j) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}