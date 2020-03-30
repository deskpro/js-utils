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

test('toSnakeCase', () => {
  expect(strings.toSnakeCase('camelCase')).toBe('camel_case');
  expect(strings.toSnakeCase('hello world')).toBe('hello_world');
  expect(strings.toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'))
    .toBe('some_mixed_string_with_spaces_underscores_and_hyphens');
});
