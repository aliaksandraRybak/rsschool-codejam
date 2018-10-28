module.exports = function recursion(tree) {
  const map = new Map();
  const level = 1;

  function goDeep(lvl, newTree) {
    let thisLevel = lvl;
    if (map.has(thisLevel)) {
      map.get(thisLevel).push(newTree.value);
    } else {
      map.set(thisLevel, [newTree.value]);
    }

    thisLevel += 1;
    if (newTree.left) {
      goDeep(thisLevel, newTree.left);
    }

    if (newTree.right) {
      goDeep(thisLevel, newTree.right);
    }
  }

  goDeep(level, tree);

  const arrays = map.values();
  const res = [];

  let arr = arrays.next().value;
  while (arr) {
    res.push(arr);
    arr = arrays.next().value;
  }

  return res;
};
