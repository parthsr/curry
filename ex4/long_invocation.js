let total = 0;
function invoc(arg1) {
  if (arg1 === undefined) {
    return total;
  }

  total += arg1;
  return invoc;
}

module.exports = invoc;
