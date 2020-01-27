class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = primes
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
        if (!primes.find(item => item === arr[k])) {
          break
        }
      }
      // k===l有两种情况，1.压根没有质因数，2.质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(item => item === i)) {
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

export default Ugly
