/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Directions array to traverse 4 directions
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const height = grid.length;
    const width = grid[0].length;

    // helper function to check if row and column are valid and in bounds
    let isValid = (row, col) => {
        return (row>=0 && col>= 0 && row<height && col<width && grid[row][col] == "1")
    }
    
    // Trigger DFS to mark islands and neighbors as visited

    let dfs = (row, col) => {
        for (const [dx, dy] of directions) {
            let nextRow = row+dx, nextCol = col+dy;
            // Check if this row and column are valid and not visited
            if (isValid(nextRow, nextCol) && grid[nextRow][nextCol] != "2") {
                grid[nextRow][nextCol] = 2; // mark as visited
                dfs(nextRow, nextCol);
            }
        }
    }

    let ans = 0;

    for (let row=0;row<height;row++) {
        for (let col=0;col<width;col++) {
            if (grid[row][col] == "1" && grid[row][col] != "2") {
                ans++; // increment answer by 1 cause we found a new island
                grid[row][col] = 2;
                dfs(row, col); // trigger dfs to mark all neighbors as visited
            }
        }
    }

    return ans;
};