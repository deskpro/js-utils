import { numbers } from '../../src';

test('numberFormat', () => {
  expect(numbers.numberFormat(3)).toBe('3');
  expect(numbers.numberFormat(3333)).toBe('3,333');
  expect(numbers.numberFormat(3333, 0, ',', '.')).toBe('3.333');
  expect(numbers.numberFormat(3.4, 2, ',', '.')).toBe('3,40');
  expect(numbers.numberFormat(3.4554, 2, ',', '.')).toBe('3,46');
  expect(numbers.numberFormat(4554.85, 2, ',', ' ')).toBe('4 554,85');
  expect(numbers.numberFormat('4 554.85', 2, ',', '\'')).toBe('4\'554,85');
});

test('numberRandom', () => {
  const values = [
    [1, 6],
    [10, 11],
    [100, 1000]
  ];

  values.forEach((val) => {
    const r = numbers.numberRandom(val[0], val[1]);
    expect(r).toBeGreaterThanOrEqual(val[0]);
    expect(r).toBeLessThanOrEqual(val[1]);
  });
});
