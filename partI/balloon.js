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
    const target = parseInt(firstInput[1]);
    const arr = input[1].split(" ").map((n) => parseInt(n));
    const result = dutchFlag(arr, target, count);
    console.log(result);
  }
});

function dutchFlag(arr, target, len) {
  let i = 0,
    left = -1,
    right = len;
  while (i < right) {
    if (arr[i] > target) {
      swap(arr, i, --right);
    } else if (arr[i] < target) {
      swap(arr, i++, ++left);
    } else {
      i++;
    }
  }
  
  if (right - 1 < left + 1) {
    return "-1 -1"
  } else {
    return (left + 1) + " " + (right - 1);
  }
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}