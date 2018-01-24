

// https://leetcode.com/problems/set-matrix-zeroes/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  if (!matrix || !matrix.length) return;
  const numRow = matrix.length;
  const numCol = matrix[0].length;

  const setRowCol = (row, col) => {
      for (let i = 0; i < numRow; i++) {
          if (matrix[i][col] !== 0) matrix[i][col] = '' + matrix[i][col];
      }
      for (let j = 0; j < numCol; j++) {
          if (matrix[row][j] !== 0) matrix[row][j] = '' + matrix[row][j];
      }
  };

  for (let i = 0; i < numRow; i++) {
      for (let j = 0; j < numCol; j++) {
          if (matrix[i][j] == 0) setRowCol(i,j);
      }
  }

  for (let i = 0; i < numRow; i++) {
      for (let j = 0; j < numCol; j++) {
          if (typeof matrix[i][j] === 'string') matrix[i][j] = 0;
      }
  }

};
// Run: O(M * N)
// Space: O(1)
