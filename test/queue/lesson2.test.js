import leasInterval from '../../code/queue/lesson2'

test('leasInterval', () => {
  expect(leasInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})
