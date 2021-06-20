const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  strSort(line.trim())
});
function strSort(str) {
  if (!str) return
  let arr = str.split('')
  split(arr, 0, arr.length - 1)
  let result = ''
  for (let i = 0, len = str.length; i < len; i++) {
    result += arr[i]
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
  let newArr = new Array(end - start + 1), i = 0, left = start, right = mid + 1
  while (left <= mid && right <= end) {
    if (isA2Z(arr[left]) && isA2Z(arr[right])) {
      if ((arr[left].toLowerCase() <= arr[right].toLowerCase()) || isSame(arr[left], arr[right])) {
        newArr[i++] = arr[left++]
      } else if (arr[left].toLowerCase() > arr[right].toLowerCase()) {
        newArr[i++] = arr[right++]
      } else {
        break
      }
    } else if (!isA2Z(arr[left]) && isA2Z(arr[right])) {
      left++
    } else if (isA2Z(arr[left]) && !isA2Z(arr[right])) {
      right++
    } else {
      left++
      right++
    }
  }
  while (left <= mid) {
    if (isA2Z(arr[left])) {
      newArr[i++] = arr[left++]
    } else {
      left++;
    }
  }
  
  while (right <= end) {
    if (isA2Z(arr[right])) {
      newArr[i++] = arr[right++]
    } else {
      right++
    }
  }
  for (let i = 0, j = 0, len = newArr.length; i < len; i++, j++) {
    if (!arr[i + start]) {
      continue
    }
    if (isA2Z(arr[i + start])) {
      arr[i + start] = newArr[j]
    } else {
      j--;
    }
  }
}

function isA2Z(char) {
  return char.toLowerCase().charCodeAt() >= 97 && char.toLowerCase().charCodeAt() <= 122
}

function isSame(c1, c2) {
  return isA2Z(c1) && isA2Z(c2) && (c1.toLowerCase() === c2.toLowerCase())
}
// `#$Y^!#Pf&~#FUyTtAfZhCs&Dly%M@(muOI@Le^mydvc((w$x-cP&t-f$R%CCp)bCck@P-aga-&RR@pwojyuD$%&ukmg%NVnS%nh(pF$t!!drI*QdsfHBDYr!rp-$a~%@DxI^k$S-s@GN@uV#D*l$JVLJ&Kw(&Mrv^x%wkZ#(-!ZhMqZ)D%ZhnXA+C&%VoHLSpn!(%O-)$VOI-!)l-H~RFR##+jwo^biOPbB$hh&FG@P@W^*+nKCebJ%PC(Q$pd^%Kp~!J*%&@!ELBYMJjJCDEJw(!!(nG#Py%thZL(szC(*o&xfY&n~-nDRZ^)$!~ZuI*RG%+BMCsaHs)lwgH+i$oByguIv%odmN%pxXJa%OA#%#+(bzEd(Ox^Z#&It`
// Dl  my   &
// left:1
// strSort(`#$Y^!#Pf&~#FUyTtAfZhCs&Dly%M@(muOI@Le^mydvc((w$x-cP&t-f$R%CCp)bCck@P-aga-&RR@pwojyuD$%&ukmg%NVnS%nh(pF$t!!drI*QdsfHBDYr!rp-$a~%@DxI^k$S-s@GN@uV#D*l$JVLJ&Kw(&Mrv^x%wkZ#(-!ZhMqZ)D%ZhnXA+C&%VoHLSpn!(%O-)$VOI-!)l-H~RFR##+jwo^biOPbB$hh&FG@P@W^*+nKCebJ%PC(Q$pd^%Kp~!J*%&@!ELBYMJjJCDEJw(!!(nG#Py%thZL(szC(*o&xfY&n~-nDRZ^)$!~ZuI*RG%+BMCsaHs)`)