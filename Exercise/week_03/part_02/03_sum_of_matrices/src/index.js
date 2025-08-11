function addMatrices(matrix1, matrix2) {
  // your code...
  let len1 = matrix1.length;
  let matrixResult = [[], [], [], []];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return matrixResult;
}

// console.log(
//   addMatrices(
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [13, 14, 15, 16],
//     ],
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [13, 14, 15, 16],
//     ]
//   )
// );

module.exports = addMatrices;

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
