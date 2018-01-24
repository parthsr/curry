let binary = require('./binary.js');

describe('passing different test cases', () => {
  it('sending numbers', () => {
    expect(binary(1, 2)).toBe(3);
  });
  it('sending strings', () => {
    expect(binary('hello', 'hello')).toBe('hellohello');
  });
  it('sending array', () => {
    expect(binary([1, 2, 3], [4, 5, 6])).toBe('1,2,34,5,6');
  });
  it('sending undefined', () => {
    expect(binary(undefined, 2)).toBe(NaN);
  });
  it('sending empty', () => {
    expect(binary()).toBe(NaN);
  });
  it('sending null', () => {
    expect(binary(null, 1)).toBe(false);
  });
  it('sending neg and pos numbers', () => {
    expect(binary(1, -2)).toBe(-1);
  });
});
