let invocation = require('./invocation.js');

describe('test cases', () => {
  test('passing numbers', () => {
    expect(invocation(1)(2)).toBe(3);
  });
  test('passing strings', () => {
    expect(invocation('hello')('hello')).toBe('hellohello');
  });
});
