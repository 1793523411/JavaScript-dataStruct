class Node {
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

class NodeList {
  constructor (arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 让基准元素跑到中间去
  swap(p, begin)
  return p
}

export default function sort (begin, end) {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export {
  Node,
  NodeList
}
