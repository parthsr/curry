let callAndApply = require('./callapply');

let update = function update(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
  return this;
};
let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };
describe('test cases for valid usage', () => {
  test('testcase 1 for valid input', () => {
    expect(callAndApply.caller(person, update, 'parth', '22', 'L')).toEqual({ age: '22', name: 'parth', tShirtSize: 'L' });
  });
  test('testcase 2 for valid input', () => {
    expect(callAndApply.applier(person, update, ['parth', '22', 'L'])).toEqual({ age: '22', name: 'parth', tShirtSize: 'L' });
  });
  test('test case 3 for typeof checking', () => {
    expect(typeof callAndApply.applier(person, update, ['parth', '22', 'L'])).toEqual('object');
  });
  test('test case 3 for typeof checking', () => {
    expect(typeof callAndApply.caller(person, update, 'parth', '22', 'L')).toEqual('object');
  });
});

describe('test cases for invalid usage', () => {
  test('testcase 1 for invalid input this as object', () => {
    expect(callAndApply.caller('this', update, 'parth', '22', 'L')).toEqual(false);
  });
  test('testcase 2 for valid input 1 as object', () => {
    expect(callAndApply.applier(1, update, ['parth', '22', 'L'])).toEqual(false);
  });
  test('testcase 3 for valid input array is object', () => {
    expect(callAndApply.applier([1, 2, 3], update, ['parth', '22', 'L'])).toEqual(false);
  });
  test('testcase 4 for valid input undefined as object', () => {
    expect(callAndApply.applier(undefined, update, ['parth', '22', 'L'])).toEqual(false);
  });
  test('testcase 5 for valid input 1 as object', () => {
    expect(callAndApply.caller(1, update, 'parth', '22', 'L')).toEqual(false);
  });
  test('testcase 6 for valid input array is object', () => {
    expect(callAndApply.caller([1, 2, 3], update, 'parth', '22', 'L')).toEqual(false);
  });
  test('testcase 7 for valid input undefined as object', () => {
    expect(callAndApply.caller(undefined, update, 'parth', '22', 'L')).toEqual(false);
  });
});
