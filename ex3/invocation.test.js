let invocation = require('./invocation.js');

describe('test cases', () => {
  test('passing numbers', () => {
    expect(invocation(1)(2)).toBe(3);
  });
  test('passing strings', () => {
    expect(invocation('hello')('hello')).toBe('hellohello');
  });
  test('passing undefined', () => {
    expect(invocation(undefined)(undefined)).toBe(NaN);
  });
  test('sending array', () => {
    expect(invocation([1, 2, 3])([4, 5, 6])).toBe(false);
  });
  test('sending single value', () => {
    expect(typeof invocation(1)).toBe('function');
  });
  test('sending null', () => {
    expect(invocation(null)(1)).toBe(false);
  });
  test('sending empty', () => {
    expect(invocation()()).toBe(NaN);
  });
});
