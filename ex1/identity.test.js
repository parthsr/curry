let identity = require('./identity');

function xx() {

}

describe('testing the function by passing different arguments', () => {
  it('testing by sending string', () => {
    expect(identity('hello')).toBe('hello');
  });
  it('testing by sending number', () => {
    expect(identity(1)).toBe(1);
  });
  it('testing by sending array', () => {
    expect(identity([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('testing by sending object', () => {
    expect(identity({ lol: 1, lolol: 2 })).toEqual({ lol: 1, lolol: 2 });
  });
  it('testing by sending function', () => {
    expect(identity(xx)).toBe(xx);
  });
  it('testing by sending undefined', () => {
    expect(identity(undefined)).toBe(undefined);
  });
  it('testing by sending null', () => {
    expect(identity(null)).toBe(null);
  });
  it('testing by sending boolean', () => {
    expect(identity(true)).toBe(true);
  });
  it('testing by sending empty', () => {
    expect(identity()).toBe(undefined);
  });
  it('testing type', () => {
    expect(typeof identity(1)).toBe(typeof 1);
  });
});
