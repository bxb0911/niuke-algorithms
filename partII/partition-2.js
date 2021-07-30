// const { getLinkList, linkedList2Array } = require('./utils')
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

function linkedList2Array(head) {
  let result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}
function partition(head, x) {
  let sh = null, st = null, mh = null, mt = null, eh = null, et = null
  let sHead = null, mHead = null, eHead = null
  while (head) {
    debugger
    if (head.val < x) {
      if (sh === null) {
        sh = { val: head.val, next: st }
        sHead = sh
      } else {
        st = { val: head.val, next: null }
        sh = { val: sh.next.val, next: st }
      }
    } else if (head.val === x) {
      if (mh === null) {
        mh = { val: head.val, next: mt }
        mHead = mh
      } else {
        mt = { val: head.val, next: null }
        mh = { val: mh.next.val, next: mt }
      }
    } else if (head.val > x) {
      if (eh === null) {
        eh = { val: head.val, next: et }
        eHead = eh
      } else {
        et = { val: head.val, next: null }
        eh = { val: eh.next.val, next: et }
      }
    }
    head = head.next
  }
  console.log(sHead, mHead, eHead)
}
// sh 1 2 st 2
partition(getLinkList([1, 4, 3, 2, 5, 2]), 3)