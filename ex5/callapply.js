
let callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    if (typeof object !== 'object' || Array.isArray(object) === true) {
      return false;
    }
    return method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    if (typeof object !== 'object' || Array.isArray(object) === true) {
      return false;
    }
    return method.apply(object, argumentsArr);
  },
};
module.exports = callAndApply;
