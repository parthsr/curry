let invocation = require('./invocation.js');

describe('test cases', () => {
  it('passing numbers', () => {
    expect(invocation(1)(2)).toBe(3);
  });
  it('passing strings', () => {
    expect(invocation('hello')('hello')).toBe('hellohello');
  });
  it('passing undefined', () => {
    expect(invocation(undefined)(undefined)).toBe(NaN);
  });
  it('sending array', () => {
    expect(invocation([1, 2, 3])([4, 5, 6])).toBe(false);
  });
  it('sending single value', () => {
    expect(typeof invocation(1)).toBe('function');
  });
  it('sending null', () => {
    expect(invocation(null)(1)).toBe(false);
  });
  it('sending empty', () => {
    expect(invocation()()).toBe(NaN);
  });
});
