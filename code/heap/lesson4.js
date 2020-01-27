class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
  }
  getAll () {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    // 不知道上限用while循环
    while (res.length < this.n) {
      let arr = Ugly.getPrimies(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        if (!primes.find(arr[k])) {
          break
        }
      }
      // k===l有两种情况，1.压根没有质因数，2.质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    // 返回丑数数组
    return res[this.n - 1]
  }
  // 计算指定正整数n的质因数
  static getPrimies (n) {
    let prime = (n) => {
      let arr = []
      for (let i = 2; i < n / 2 + 1; i++) {
        // 求质数利用递归，因为返回的是一个arr数组,当数组为空时说明是质数
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

class Heap {
  constructor (arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
  }
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) {
      return iArr
    } else {
      // 循环是为了遍历每一个可能要调整的节点，maxHeapify内部递归是为了回复被破坏的堆
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      return iArr
    }
  }
  find (val, i = 0) {
    let arr = this.data
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }
  static swap (arr, a, b) {
    if (a === b) {
      return ''
    }
    // 交换
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
  // 构建最大堆
  static maxHeapify (Arr, i, size) {
    // 左节点
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i
    // 父节点和左节点l作比较获取最大
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }
    // 右节点额最大值比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}

export default Ugly
export {
  Heap
}
