

// https://leetcode.com/problems/word-search/description/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (!board || !board.length) return false;
  const numRow = board.length;
  const numCol = board[0].length;
  const wordLength = word.length;
  const visited = new Map();

  const checkCell = (row, col, index) => {
      if (row < 0 || col < 0 || row >= numRow || col >= numCol) return false;
      const wordIndex = row * numCol + col;
      if (visited.get(wordIndex)) return false;
      if (board[row][col] !== word[index++]) return false;
      if (index === wordLength) return true;

      visited.set(wordIndex, true);
      if (checkCell(row - 1, col, index)) return true;
      if (checkCell(row + 1, col, index)) return true;
      if (checkCell(row, col - 1, index)) return true;
      if (checkCell(row, col + 1, index)) return true;
      visited.set(wordIndex, false);

      return false;
  };

  for (let i = 0; i < numRow; i++) {
      for (let j = 0; j < numCol; j++) {
          if (board[i][j] !== word[0]) continue;
          if (checkCell(i, j, 0, visited)) return true;
      }
  }
  return false;
};
