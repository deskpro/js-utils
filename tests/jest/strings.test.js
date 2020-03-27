import { strings } from '../../src';

test('trimString', () => {
  expect(strings.trimString('abcdef', 6)).toBe('abcdef');
  expect(strings.trimString('abcdefg', 6)).toBe('abc...');
});

test('capitalize', () => {
  expect(strings.capitalize('abcdef')).toBe('Abcdef');
  expect(strings.capitalize(8)).toBe('');
  expect(strings.capitalize('ABCDE')).toBe('ABCDE');
});
