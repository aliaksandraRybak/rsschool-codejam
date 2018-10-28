function make(...args) {
	let params = [];
	params.push(...args);

	return function check(...args) {
		if (typeof args[0] !== 'function') {
			params.push(...args);
		} else {
			const res = params.reduce(args[0]);
			return res;
		}

		return check;
	}
} 

function sum(a, b) {
    return a + b;
}

console.log( make(15)(34, 21, 666)(41)(sum) ); // return 777