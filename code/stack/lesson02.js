export default (arr) => {
  let result = []
  let reg = /1{2,}/g
  // 把二维数组重新表达，把相邻的1提取出来
  arr = arr.map(item => {
    let str = item.join('')
    let r = reg.exec(str)
    let rs = []
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1])
      r = reg.exec(str)
    }
    return rs
  })
  // 通过递归计算相邻矩阵
  let maxRect = (arr, result, n = 1) => {
    // 弹出第一行
    let top = arr.pop()
    // 弹出第二行
    let next = arr.pop()
    // 记录第一行的每一个起始和截止
    let tt
    // 记录第二行。。。
    let nn
    // 记录交叉的其实索引
    let start
    // 记录交叉的截止索引
    let end
    let width = 1
    let maxWidth = 1
    n++
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i]
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j]
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        if (width > maxWidth) {
          maxWidth = width
          start = Math.max(tt[0], nn[0])
          end = Math.max(tt[1], nn[1])
        }
      }
    }
    // 没有交叉点
    if (start === undefined || end === undefined) {
      if (n < 3) {
        return false
      } else {
        width = top[0][1] - top[0][0] + 1
        if (width > 1) {
          result.push((n - 1) * width)
        }
      }
    } else {
      arr.push([[start, end]])
      maxRect(arr, result, n++)
    }
  }
  while (arr.length > 1) {
    // 要值拷贝，因数组在javascript中时引用类型
    maxRect([].concat(arr), result)
    arr.pop()
  }
  let max = 0
  let item = result.pop()
  while (item) {
    if (item > max) {
      max = item
    }
    item = result.pop()
  }
  return max > 0 ? max : -1
}
