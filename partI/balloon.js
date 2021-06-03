// 10 3 --- 6 7
// 0 1 2 3 4 5 6 7 8 9
// 1 4 0 0 3 1 5 3 1 1
//)1 4 0 0 3 1 5 3 1 1(
// I
// 1)4 0 0 3 1 5 3 1 1(
//   I
// 1)1 0 0 3 1 5 3 1(4
//   I
// 1 1)0 0 3 1 5 3 1(4
//     I
// 1 1 0)0 3 1 5 3 1(4
//       I
// 1 1 0 0)3 1 5 3 1(4
//         I
// 1 1 0 0)3 1 5 3 1(4
//           I
// 1 1 0 0 1)3 5 3 1(4
//             I
// 1 1 0 0 1)3 1 3(5 4
//             I
// 1 1 0 0 1 1)3 3(5 4
//               I
function dutchFlag(arr, target) {
  let i = 0,
    left = -1,
    right = arr.length;
  while (i < right) {
    if (arr[i] > target) {
      swap(arr, i, --right);
    } else if (arr[i] < target) {
      left++;
      i++;
    } else {
      i++;
    }
  }
  return [++left, --right];
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

let result = dutchFlag([1, 4, 0, 0, 3, 1, 5, 3, 1, 1], 3);
console.log(result);
