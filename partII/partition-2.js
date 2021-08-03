const { getLinkList } = require('./utils')

function partition(head, x) {
  if (head && !head.next) {
    console.log(JSON.stringify(head))
    return
  }
  let sh = null, st = null
  let mh = null, mt = null

  while (head) {
    if (head.val < x) {
      if (!sh) {
        sh = st = head
      } else {
        st = st.next = head
      }
    } else if (head.val >= x) {
      if (!mh) {
        mh = mt = head
      } else {
        mt = mt.next = head
      }
    }
    head = head.next
  }
  st && (st.next = mh)
  mt && (mt.next = null)
  console.log(JSON.stringify(sh || mh))
}

partition(getLinkList([16,11,-12,-68,-40,-52,59,29,68,-4,42,-53,28,-3,-18,-24,-9,-97,38,92,-52,-23,4,88,-6,8,-85,60,-74,-81,37,-6,30,-75,26,42,-75,-14,-28,94,82,66,93,-38,-37,-24,39,6,-69,-71,-2,-21,6,-98,-33,52,-37,-65,-35,-11,-46,-98,83,36,79,-39,-21,-96,47,3,50,-18,-79,-4,-4,-64,24,87,43,55,-84,93,-65,-26,48,-46,79,-89,-11,-56,-48,-5,98,-65,84,77,-4,-85,33,96,-30,-16,-70,-9]),-30)