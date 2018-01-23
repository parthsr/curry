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
    expect(invocation([1, 2, 3])([4, 5, 6])).toBe('1,2,34,5,6');
  });
});
