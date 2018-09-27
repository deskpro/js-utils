import { debounce } from '../../src';

jest.useFakeTimers();

test('debounce', () => {
  const callback = jest.fn();

  const debouncedCallback = debounce(callback);

  debouncedCallback();
  debouncedCallback();
  debouncedCallback();
  debouncedCallback();

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.runAllTimers();

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);

  debouncedCallback();

  jest.runAllTimers();
  expect(callback).toHaveBeenCalledTimes(2);
});
