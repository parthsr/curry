let invoc = require('./long_invocation');

describe('test cases for the program', () => {
  test('testcase 1 by passing number', () => {
    expect(typeof invoc(10)).toBe(typeof function random() {});
  });
  test('testcase 2 by passing nothing', () => {
    expect(invoc()).toBe(10);
  });
  // test('testcase 3 by passing number', () => {
  //   expect(typeof invoc(10)).toBe(typeof function random() {});
  // });
  // test('testcase 4 by passing nothing', () => {
  //   expect(invoc()).toBe(20);
  // });
  // test('testcase 5 byu passing strings', () => {
  //   expect(invoc('stringg')).toBe(20);
  // });
  // test('testcase 6 by passing null', () => {
  //   expect(invoc(null)).toBe(20);
  // });
  // test('testcase 7 by passing undefined', () => {
  //   expect(invoc(undefined)).toBe(20);
  // });
  // test('testcase 8 by passing arrays', () => {
  //   expect(invoc([1, 2])).toBe(20);
  // });
  // test('testcase 9', () => {
  //   expect(invoc({ kk: 5 })).toBe(20);
  // });
});
