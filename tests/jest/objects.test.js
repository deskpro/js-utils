import { objects } from '../../src';

test('objectKeyFilter', () => {
  const propTypes = { className: 'string' };
  const props = {
    className: 'dp-item',
    title:     'foo'
  };
  const result = objects.objectKeyFilter(props, propTypes);
  expect(result.className).toBe(undefined);
  expect(result.title).not.toBe(undefined);
  expect(result.title).toBe('foo');
});

test('objectForEach', () => {
  const values = {
    name:  'item',
    title: 'foo'
  };
  const actual = {};

  objects.objectForEach(values, (val, key) => {
    actual[key] = val;
  });
  expect(actual.name).toBe('item');
  expect(actual.title).toBe('foo');
});

test('objectMap', () => {
  const values = {
    name:  'item',
    title: 'foo',
    alt:   'bar'
  };

  /* eslint-disable consistent-return */
  const results = objects.objectMap(values, (val, key) => {
    if (key !== 'alt') {
      return val.toUpperCase();
    }
  });
  expect(results.length).toBe(2);
  expect(results[0]).toBe('ITEM');
  expect(results[1]).toBe('FOO');
});

test('deepMerge', () => {
  const object1 = {
    name:       'Name',
    notChanged: 'not changed',
    children:   { title: 'title' }
  };

  const object2 = {
    name:         'New name',
    newAttribute: 'new attribute',
    children:     {
      color: 'blue',
      title: 'new title'
    }
  };
  const result = objects.deepMerge(object1, object2);
  expect(result).toEqual({
    name:       'New name',
    notChanged: 'not changed',
    children:   { title: 'new title' }
  });
});
