const sumOfOther = (arr) => {
  const sumOfAll = arr.reduce((sum, curr) => {
    const temp = sum + curr;
    return temp;
  });
  const res = arr.map(item => sumOfAll - item);

  return res;
};

module.exports = sumOfOther;
