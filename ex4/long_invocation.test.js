let invoc = require('./long_invocation');

describe('test cases for the program', () => {
  it('testcase 1 by passing number', () => {
    expect(typeof invoc(10)).toBe('function');
  });
  it('testcase 2 by passing nothing', () => {
    expect(invoc()).toBe(10);
  });
  it('testcase 3 by passing number', () => {
    expect(typeof invoc(10)).toBe('function');
  });
  it('testcase 4 by passing nothing', () => {
    expect(invoc()).toBe(20);
  });
  it('testcase 5 byu passing strings', () => {
    expect(invoc('stringg')).toBe(20);
  });
  it('testcase 6 by passing null', () => {
    expect(invoc(null)).toBe(20);
  });
  it('testcase 7 by passing undefined', () => {
    expect(invoc(undefined)).toBe(20);
  });
  it('testcase 8 by passing arrays', () => {
    expect(invoc([1, 2])).toBe(20);
  });
  it('testcase 9', () => {
    expect(invoc({ kk: 5 })).toBe(20);
  });
});
