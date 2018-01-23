
function curry(normalfunc) {
  let count = normalfunc.length;

  return function f1() {
    let args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= count) {
      return normalfunc(...args);
    }
    return function f2() {
      let args2 = Array.prototype.slice.call(arguments, 0);
      return f1(...args.concat(args2));
    };
  };
}
module.exports = curry;
