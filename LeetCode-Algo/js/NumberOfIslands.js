/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // handle case where grid is empty
  if (grid === null || !grid.length) {
    return 0;
  }

  // get our height and width of grid
  const height = grid.length;
  const width = grid[0].length;

  // initialize count of islands to zero
  let num_islands = 0;

  //iterate through our grid
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === '1') {
        //we've found a root node that triggers DFS
        num_islands++; //increment count of islands by 1
        dfs(grid, x, y); //perform dfs and set visited nodes to 0
      }
    }
  }

  return num_islands;
};

function dfs(grid, x, y) {
  if (x >= grid[0].length || x < 0) return;
  if (y >= grid.length || y < 0) return;
  if (grid[y][x] !== '1') return;
  grid[y][x] = 0;
  dfs(grid, x + 1, y);
  dfs(grid, x - 1, y);
  dfs(grid, x, y + 1);
  dfs(grid, x, y - 1);
}
