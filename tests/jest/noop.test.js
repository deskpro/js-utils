import { noop } from '../../src';

test('noop', () => {
  expect(typeof noop).toBe('function');
});
