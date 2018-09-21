import { strings } from '../../src';

test('trimString', () => {
  expect(strings.trimString('abcdef', 6)).toBe('abcdef');
  expect(strings.trimString('abcdefg', 6)).toBe('abc...');
});
