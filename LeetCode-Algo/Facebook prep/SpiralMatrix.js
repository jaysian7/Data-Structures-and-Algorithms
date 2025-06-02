/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    // define 4 variables which represent the boundaries of the current spiral
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    // initialize a variable direction to 0 which represents the current direction (right, down, left, or up)
    let direction = 0;

    // Iterate through the matrix in a spiral order while updating the boundaries and direction
    while (top <= bottom && left <= right) {
        if (direction === 0) { // Move right
            for (let i=left; i<=right; i++) {
                // n--;
                result.push(matrix[top][i]);
            }
            top++;
        } else if (direction === 1) { // Move down
            for (let i=top; i<=bottom; i++) {
                // n--;
                result.push(matrix[i][right]);
            }
            right--;
        } else if (direction === 2) { // Move left
            for (let i=right; i>=left; i--) {
                // n--;
                result.push(matrix[bottom][i]);
            }
            bottom--;
        } else if (direction === 3) { // Move up
            for (let i=bottom; i>=top; i--) {
                // n--;
                result.push(matrix[i][left]);
            }
            left++;
        }

        direction = (direction + 1) % 4;
        // If asking for Nth element
        // if (n === 0) {
        //     return result;
        // }
    }

    return result;

};