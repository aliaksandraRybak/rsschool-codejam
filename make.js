module.exports = function make(...args) {
  const params = [];
  params.push(...args);

  return function check(...innerArgs) {
    if (typeof args[0] !== 'function') {
      params.push(...innerArgs);
    } else {
      const res = params.reduce(args[0]);
      return res;
    }

    return check;
  };
};
