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
  let pf = p1, ps = p2, res = []
  while (pf.next !== null && ps.next !== null) {
    if (pf.val < ps.val) {
      pf = pf.next
    } else if (pf.val > ps.val) {
      ps = ps.next
    } else {
      res.push(pf.val)
      pf = pf.next
      ps = ps.next
    }
  }
  if (pf.next) {
    while (pf.next) {
      pf.val === ps.val && res.push(pf.val)
      pf = pf.next
    }
    pf.val === ps.val && res.push(pf.val)
  }
  if (ps.next) {
    while (ps.next) {
      pf.val === ps.val && res.push(ps.val)
      ps = ps.next
    }
    pf.val === ps.val && res.push(ps.val)
  }
  return res.join(' ')
}

// let p1 = getLinkList('1 2 3 4')
// let p2 = getLinkList('1 2 3 5 6')
// let result = getCmnPart(p1, p2)
// console.log(result)