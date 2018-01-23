function normalfunc(a, b, c) {
  console.log(a + b + c);
}

let normalcall = curry(normalfunc);


describe('testing use case', () => {
  test('test case 1 for valid output', () => {
    expect(normalcall(1, 2, 3)).toBe(6);
  });
});
