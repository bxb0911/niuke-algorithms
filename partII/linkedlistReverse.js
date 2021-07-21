function ReverseList(pHead) {
  // write code here
  if (!pHead) {
    return pHead
  }
  let prev = null, cur = pHead, next = pHead.next;
  while (next) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = next.next;
  }
  cur.next = prev;
  return cur;
}

ReverseList(p1)

module.exports = {
  ReverseList : ReverseList
};