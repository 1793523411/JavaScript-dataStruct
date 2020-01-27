import matrix from '../../code/matrix/lesson2'

test('matrix:1', () => {
  let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  let output = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]
  expect(matrix(input)).toEqual(output)
})
