function recursion(tree) {
	const map = new Map();
	let level = 1;

	function setLevels(level, newTree) {
		if (map.has(level)) {
			map.get(level).push(newTree.value);
		} else {
			map.set(level, [newTree.value]);
		}

		level++;
		if (newTree.left) {
			setLevels(level, newTree.left);
		}

		if (newTree.right) {
			setLevels(level, newTree.right);
		}
	}

	setLevels(level, tree);

	const arrays = map.values();
	const res = [];

	let arr = arrays.next().value;
	while (arr) {
		res.push(arr);
		arr = arrays.next().value;
	}

	return res;
}


let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
let array = recursion(tree);

console.log(array); // [[100], [90, 120], [70,99,110,130]]