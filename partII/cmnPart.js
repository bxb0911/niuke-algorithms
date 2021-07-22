const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line.trim())
  if (input.length === 4) {
    let p1 = getLinkList(input[1])
    let p2 = getLinkList(input[3])
    let result = getCmnPart(p1, p2)
    console.log(result)
    input = []
  }
})

function ListNode(x){
  this.val = x;
  this.next = null;
}

function getLinkList(str) {
  let nodeList = str.split(' ').map(item => new ListNode(parseInt(item)))
  if (nodeList.length) {
    nodeList.forEach((item, index) => {
      if (index < nodeList.length - 1) {
        item.next = nodeList[index + 1]
      }
    })
  }
  return nodeList[0]
}

function getCmnPart(p1, p2) {
  let res = []
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p1 = p1.next
    } else if (p1.val > p2.val) {
      p2 = p2.next
    } else {
      res.push(p1.val)
      p1 = p1.next
      p2 = p2.next
    }
  }
  return res.join(' ')
}
