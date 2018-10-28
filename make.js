module.exports = function make(...args) {
  const params = [];
  params.push(...args);

  return function check(...innerArgs) {
    if (typeof innerArgs[0] !== 'function') {
      params.push(...innerArgs);
    } else {
      const res = params.reduce(innerArgs[0]);
      return res;
    }

    return check;
  };
};
