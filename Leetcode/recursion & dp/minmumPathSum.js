

// https://leetcode.com/problems/minimum-path-sum/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// Solution - recursion
const minPathSumMemo = (grid, row = 0, col = 0, memo) => {
  if (!grid || !grid.length) return 0;
  if (!memo) memo = new Map();
  const numRow = grid.length;
  const numCol = grid[0].length;
  if (row === numRow - 1 && col === numCol - 1) return grid[row][col];

  const index = row * numCol + col;
  if (memo.has(index)) return memo.get(index);

  let nextRowMinPath;
  if (row < numRow - 1) {
    nextRowMinPath = minPathSum(grid, row + 1, col, memo);
  }

  let nextColMinPath;
  if (col < numCol - 1) {
    nextColMinPath = minPathSum(grid, row, col + 1, memo);
  }

  let minPath;
  if (nextRowMinPath === undefined) {
    minPath = nextColMinPath;
  } else if (nextColMinPath === undefined) {
    minPath = nextRowMinPath;
  } else {
    minPath = Math.min(nextRowMinPath, nextColMinPath);
  }

  memo.set(index, grid[row][col] + minPath);
  return grid[row][col] + minPath;
};
// Run: O(M * N)
// Space: O(M * N)

// Solution - DP
const minPathSumDP = (grid) => {
  if (!grid || !grid.length) return 0;
  const numRow = grid.length;
  const numCol = grid[0].length;

  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numCol; j++) {
      if (i === 0 && j !== 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (i !== 0 && j === 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (i !== 0 && j !== 0) {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }

  return grid[numRow - 1][numCol - 1];
};
// Run: O(M * N)
// Space: O(1)
