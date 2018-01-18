

// https://leetcode.com/problems/number-of-islands/description/

// Solution - DFS
public class Solution {

    public void dfs(char[,] grid, int numRow, int numCol, int row, int col) {
      if (row < 0 || col < 0) return;
      if (row >= numRow || col >= numCol) return;
      if (grid[row, col] == '0') return;
      grid[row, col] = '0';
      dfs(grid, numRow, numCol, row - 1, col);
      dfs(grid, numRow, numCol, row + 1, col);
      dfs(grid, numRow, numCol, row, col - 1);
      dfs(grid, numRow, numCol, row, col + 1);
    }

    public int NumIslands(char[,] grid) {
        int numRow = grid.GetLength(0);
        int numCol = grid.GetLength(1);
        int count = 0;

        for (int i = 0; i < numRow; i++) {
          for (int j = 0; j < numCol; j++) {
            if (grid[i, j] == '1') {
              count++;
              dfs(grid, numRow, numCol, i, j);
            }
          }
        }

        return count;
    }
}
// Run: O(M * N)
// Space: O(Min(M, N)) or O(M * N) ???
