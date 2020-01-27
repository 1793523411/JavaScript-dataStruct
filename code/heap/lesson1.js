class Heap {
  constructor (data) {
    this.data = data
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
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j)
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
      }
      return iArr
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

export default Heap
