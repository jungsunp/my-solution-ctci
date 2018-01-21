

// https://leetcode.com/problems/game-of-life/description/

public class Solution {

  public void GameOfLife(int[,] board) {
    int numRow = board.GetLength(0);
    int numCol = board.GetLength(1);

    // count number of neighbors and update cell
    for (int row = 0; row < numRow; row++) {
      for(int col = 0; col < numCol; col++) {
        checkCell(board, numRow, numCol, row, col);
      }
    }

    // convert temporary cells with 2 or 3
    for (int row = 0; row < numRow; row++) {
      for(int col = 0; col < numCol; col++) {
        board[row, col] %= 2;
      }
    }
  }

  public void checkCell(int[,] board, int numRow, int numCol, int row, int col) {
    int count = 0;
    for (int i = Math.Max(0, row - 1); i <= Math.Min(numRow - 1, row + 1); i++) {
      for (int j = Math.Max(0, col - 1); j <= Math.Min(numCol - 1, col + 1); j++) {
        if (i == row && j == col) continue;
        if (board[i,j] == 1 || board[i,j] == 2) count++;
      }
    }

    if (board[row,col] == 1) {
      if (count < 2 || count > 3) board[row,col] = 2;
    } else {
      if (count == 3) board[row, col] = 3;
    }
  }
}
// Run: O(M * N)
// Space: O(1)
