// function RandomListNode(x){
//   this.label = x;
//   this.next = null;
//   this.random = null;
// }

// {1,2,3,4,5,3,5,#,2,#}
function Clone(pHead) {
  // write code here
  let map = new Map();
  let head = pHead;
  while (head) {
    map.set(head, {label:head.label, next: null, random: null})
    head = head.next;
  }
  let nHead = head = pHead;
  while (pHead) {
    nHead = map.get(pHead)
    nHead.next = pHead.next;
    nHead.random = pHead.random;
    pHead = pHead.next
  }
  return head
}

module.exports = {
  Clone: Clone,
};
