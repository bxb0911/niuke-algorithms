// {1,2,3,4,5,3,5,#,2,#}

function Clone(pHead) {
  // write code here
  let prev, cur
  let head = prev = pHead
  while (prev) {
    cur = { label: prev.label, next: null, random: null };
    cur.next = prev.next
    prev.next = cur
    prev = prev.next.next
  }
  let result = head
  while (head) {
    prev = head
    head = head.next
    head.random = prev.random ? prev.random.next : null
    head = head.next
  }
  result = result ? result.next : null
  let final = result
  while(result && result.next) {
    let cloned = result.next
    result.next = cloned.next
    result = cloned
  }
  return final
}

module.exports = {
  Clone: Clone
};
