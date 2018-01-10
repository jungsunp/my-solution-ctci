

// https://leetcode.com/problems/rotate-image/description/

public class Solution {
  public void Rotate(int[,] matrix) {
      int length = matrix.GetLength(0); // number of row
      int depth = 0;

      while (depth < length - 1) {
        int blockLen = length - depth - 1;
        int[] tmpArr = new int[blockLen];

        for(int fromCol = 0; i < blockLen; i++) {
          int fromRow = depth;
          int toRow = length - fromRow - 1;
          int toCol = fromCol;

          tmpArr[fromCol]  = int[toRow, toCol];
          int[toRow, toCol] = int[fromRow, fromCol];
        }

        for(int fromRow = 0; i < blockLen; i++) {
          int fromCol = length - depth -1;
          int toCol = length - fromRow - 1;
          int toRow = fromCol;

          tmpArr[fromCol]  = int[toRow, toCol];
          int[toRow, toCol] = int[fromRow, fromCol];
        }

        depth += 2;
      }
  }
}
