/**
Strategy is to:

1.Generate all combinations of string elements (adheres to topological index order)
2.Check if each combination is unique
3.If unique, compare and update our maxLength result
*/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let max = 0; // initialize maxLength to 0

	function helper(array, string, index) {
		if (isUnique(string)) {
			max = Math.max(max, string.length); // check every incoming string combination and update max if unique
		} else {
			return; // if string is not unique, we don't need to append more elements, thus return in order to reduce the recursive calls
		}

		if (index === array.length) return // base case - stop recursion when we hit the end of array

		for (let i = index; i < array.length; i++) {
			let nextStr = string.concat(array[i]); // generate our next string candidate
			helper(array, nextStr, i + 1);
		}
	}

	function isUnique(string) {
		let seen = {};
		for (const letter of string) {
			if (seen[letter]) return false;
			seen[letter] = 1;
		}
		return true;
	}

	helper(arr, "", 0);
	return max;
};
