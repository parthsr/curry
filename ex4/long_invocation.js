let total = 0;
let invoc = (arg1) => {
  if (typeof arg1 !== 'number') {
    return total;
  }
  total += arg1;
  return invoc;
};

module.exports = invoc;
