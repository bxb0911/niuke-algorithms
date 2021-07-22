// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }

// function getLinkList(nodeList) {
//   nodeList = nodeList.map(item => new ListNode(item))
//   if (nodeList.length) {
//     nodeList.forEach((item, index) => {
//       if (index < nodeList.length - 1) {
//         item.next = nodeList[index + 1]
//       }
//     })
//   }
//   return nodeList[0]
// }

function isPail(head) {
  // write code here
  let stack = [], res = true
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  for (let len = stack.length, i = len - 1; i >= 0; i--) {
    if (stack[i] !== stack[len - i - 1]) {
      res = false
      break
    }
  }
  return res
}

module.exports = {
  isPail : isPail
};