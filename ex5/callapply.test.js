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
});
