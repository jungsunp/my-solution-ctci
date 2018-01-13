

// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {

  const checkValid = (val, map) => {
      if (val === '.') return true;
      if (map.has(val)) return false;
      map.set(val, true);
      return true;
  };

  for (let i = 0; i < 9; i++) {

      const row = new Map();
      const col = new Map();
      const square = new Map();
      const rowIndex = (i % 3) * 3;
      const colIndex = Math.floor(i / 3) * 3;

      for (let j = 0; j < 9; j++) {
          if (!checkValid(board[i][j], row)) return false;
          if (!checkValid(board[j][i], col)) return false;
          if (!checkValid(board[rowIndex + Math.floor(j/3)][colIndex + j%3], square)) return false;
      }

  }
  return true;
};
// More efficient solution also O(n)
