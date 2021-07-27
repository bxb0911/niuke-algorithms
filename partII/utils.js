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

export default {
  getLinkList,
  linkedList2Array
}