/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Reverse on Diagonal and then Reverse Left to Right 
	
//	1 2 3      1 4 7      7 4 1
//	4 5 6  =>  2 5 8  =>  8 5 2 
//	7 8 9      3 6 9      9 6 3

// Time complexity: O(N)
// Space complexity: O(1)

var rotate = function(matrix) {
    const n = matrix.length;
	
	function transpose() {
		for(let i = 0; i < n; i++) {
			for(let j = i + 1; j < n; j++) {
				const temp = matrix[j][i];
				matrix[j][i] = matrix[i][j];
				matrix[i][j] = temp;
			}
		}
	}
	
	function rotate() {
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < Math.floor(n / 2); j++) {
				const temp = matrix[i][j];
				matrix[i][j] = matrix[i][n - 1 - j];
				matrix[i][n - 1 - j] = temp;
			}
		}
	}
	
	transpose(matrix);
	rotate(matrix);
};