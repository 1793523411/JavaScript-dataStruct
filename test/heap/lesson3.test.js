import Ugly from '../../code/heap/lesson3'

test('ugly:1', () => {
  expect(Ugly.getPrimies(6)).toEqual([2, 3])
  expect(Ugly.getPrimies(4)).toEqual([2])
  expect(Ugly.getPrimies(180)).toEqual([2, 3, 5])
})

test('Ugly:2', () => {
  let ugly = new Ugly(12, [2, 7, 13, 19])
  expect(ugly.getAll()).toBe(32)
})
