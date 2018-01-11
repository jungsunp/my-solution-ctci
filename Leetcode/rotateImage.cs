

// https://leetcode.com/problems/rotate-image/description/

public class Solution {
    public void Rotate(int[,] matrix) {
        int length = matrix.GetLength(0); // number of row

        for (int row = 0; row < length / 2; row++) {
          for (int col = row; col < length - row - 1; col++) {
            MovePixel(matrix, row, col);
          }
        }

    }

    public void MovePixel(int[,] matrix, int row, int col) {
      int length = matrix.GetLength(0);
      int fromRow, fromCol, tmpNum;
      int toRow = col;
      int toCol = length - row - 1;
      int copyNum = matrix[row, col];


      for (int i = 0; i < 4; i++) {
        tmpNum = matrix[toRow, toCol];
        matrix[toRow, toCol] = copyNum;
        copyNum = tmpNum;

        fromRow = toRow;
        fromCol = toCol;
        toRow = fromCol;
        toCol = length - fromRow - 1;
      }


    }
}
