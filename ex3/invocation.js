function closing(arg1) {
  return function beingCloses(arg2) {
    return arg1 + arg2;
  };
}

module.exports = closing;
