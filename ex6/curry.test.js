let curry = require('./curry');

function normalfunc(a, b, c) {
  return a + b + c;
}

let normalcall = curry(normalfunc);


describe('testing use case', () => {
  test('test case 1 for valid output', () => {
    expect(normalcall(1, 2, 3)).toBe(6);
  });
  test('test case 1 for valid output', () => {
    expect(normalcall(1, 2)(3)).toBe(6);
  });
  test('test case 1 for valid output', () => {
    expect(normalcall(1)(2)(3)).toBe(6);
  });
  test('test case 1 for valid output', () => {
    expect(normalcall(1, 2, 3, 4)).toBe(6);
  });
});
