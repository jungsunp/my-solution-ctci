

// Soution - Brute force
// const rotateMatrix = matrix => {
//   const rotMatrix = [];
//   const N = matrix.length; // number of rows & cols

//   // Rotate
//   for (let i = 0; i < N; i++) {
//     const rotRow = [];
//     for (let j = 0; j < N; j++) {
//       rotRow.push(matrix[N - 1 - i][j]);
//     }
//     rotMatrix.push(rotRow);
//   }

//   // Copy val
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       matrix[i][j] = rotMatrix[i][j];
//     }
//   }
// };
// run time: O(n^2)
// space complexity: O(n^2)

// Soution - rotate in place (by layer)
const rotateMatrix = matrix => {
  const edge = matrix.length - 1;

  const movePixel = (row, col) => {
    let fromRow, fromCol, fromPixel;

    let toRow = row;
    let toCol = col;
    let toPixel = matrix[row][col];

    for (let i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (let i = 0; i < edge / 2; i++) {
    for (let j = i; j < edge - i; j++) {
      console.log('(i, j):', i, j);
      movePixel(i,j);
    }
  }

};
// run time: O(n^2)
// space complexity: O(n^2)

/* TEST */
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];

  console.log('before:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);

  rotateMatrix(testMatrix);

  console.log('after:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
