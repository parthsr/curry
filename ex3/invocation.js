let closing = arg1 => (arg2) => {
  if (typeof arg1 === 'object' || typeof arg2 === 'object') {
    return false;
  }
  return arg1 + arg2;
};
module.exports = closing;
