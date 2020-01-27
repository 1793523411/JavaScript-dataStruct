export default class MyCricularQueue {
  constructor (k) {
    // 保存数据长度为k的长度
    this.list = Array(k)
    this.front = 0
    this.rear = 0
    this.max = k
  }
  enQueue (v) {
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = v
      this.rear = (this.rear + 1) % this
      return true
    }
  }
  deQueue () {
    let v = this.list[this.front]
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return v
  }
  isEmpty () {
    return this.front === this.rear && !this.list[this.front]
  }
  isFull () {
    return this.front === this.rear && this.list[this.front]
  }
  Front () {
    return this.list[this.front]
  }
  Rear () {
    let rear = this.rear - 1
    return this.list[rear < 0 ? this.max - 1 : rear]
  }
}
