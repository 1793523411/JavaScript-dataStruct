// export default (arr, k) => {
//   return arr.sort((a, b) => b - a)[k - 1]
// }

// export default (arr, k) => {
//   let len = arr.length - 1
//   for (let i = len, tmp; i > len - k; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         tmp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = tmp
//       }
//     }
//   }
//   // arr[len+1-k]
//   return arr[len - (k - 1)]
// }

export default (arr, k) => {
  // 选择排序
  for (let i = 0, len = arr.length, max; i < k; i++) {
    max = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > max) {
        let c = max
        max = arr[j]
        arr[j] = c
      }
    }
    arr[i] = max
  }
  return arr[k - 1]
}
