let identity = require('./identity');

function xx() {

}

describe('testing the function by passing different arguments', () => {
  test('testing by sending string', () => {
    expect(identity('hello')).toBe('hello');
  });
  test('testing by sending number', () => {
    expect(identity(1)).toBe(1);
  });
  test('testing by sending array', () => {
    expect(identity([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('testing by sending object', () => {
    expect(identity({ lol: 1, lolol: 2 })).toEqual({ lol: 1, lolol: 2 });
  });
  test('testing by sending function', () => {
    expect(identity(xx)).toBe(xx);
  });
  test('testing by sending number', () => {
    expect(identity(undefined)).toBe(undefined);
  });
  // test('testing by sending number', () => {
  //   expect(identity(null)).toBe(null);
  // });
});
