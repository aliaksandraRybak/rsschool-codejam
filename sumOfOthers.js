const sumOfOther = (arr) => {
  const sum = arr.reduce((sum, curr) => sum += curr);

  return arr.map(item => sum - item);
}

module.exports = sumOfOther;