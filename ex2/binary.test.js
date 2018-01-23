let binary = require('./binary.js');

describe('passing different test cases', () => {
  test('sending numbers', () => {
    expect(binary(1, 2)).toBe(3);
  });
  test('sending strings', () => {
    expect(binary('hello', 'hello')).toBe('hellohello');
  });
  test('sending array', () => {
    expect(binary([1, 2, 3], [4, 5, 6])).toBe('1,2,34,5,6');
  });
  test('sending undefined', () => {
    expect(binary(undefined, 2)).toBe(NaN);
  });
  test('sending empty', () => {
    expect(binary()).toBe(NaN);
  });
  test('sending null', () => {
    expect(binary(null, 1)).toBe(1);
  });
});
