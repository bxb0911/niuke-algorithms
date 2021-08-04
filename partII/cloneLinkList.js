/*
function RandomListNode(x){
  this.label = x;
  this.next = null;
  this.random = null;
}
*/
// {1,2,3,4,5,3,5,#,2,#}
function Clone(pHead) {
  // write code here
  while (pHead) {
    pHead.next = { label: pHead.label, next: null, random: null };
  }
}

module.exports = {
  Clone: Clone,
};
