function ListNode(x){
  this.val = x;
  this.next = null;
}

function getLinkList(nodeList) {
  nodeList = nodeList.map(item => new ListNode(item))
  if (nodeList.length) {
    nodeList.forEach((item, index) => {
      if (index < nodeList.length - 1) {
        item.next = nodeList[index + 1]
      }
    })
  }
  return nodeList[0]
}

function isPail(head) {
  // write code here
  let f = head, s = head, temp, res = true
  // 1 -> 2 -> 3 -> 3 -> 2 -> 1 -> null s = 3 f = 1
  // 1 -> 2 -> 3 -> 2 -> 1 -> null      s = 3 f = 1
  // 快慢指针遍历
  while (f) {
    temp = f
    s = s.next
    f = f.next ? f.next.next : f
  }
  f === null && (f = temp.next)
  // 链表反转
  // 1 -> 2 -> 3 (-> null) <- 3 <- 2 <- 1
  let prev = null, cur = s, next = s.next
  while (next) {
    cur.next = prev
    prev = s
    cur = next
    next = next.next
  }
  cur.next = prev
  // 遍历检查
  let start = head, end = cur
  while (start && end) {
    if (start.val !== end.val) {
      res = false
      break
    } else {
      start = start.next
      end = end.next
    }
  }
  return res;
}

let data = getLinkList([-723790,-927,-427509,-934880,79234,-415413,-267349,640368,798009,480222,-932266,649704,-244396,823801,488066,-24800,-942925,-311915,-503317])
isPail(data)
// module.exports = {
//   isPail : isPail
// };