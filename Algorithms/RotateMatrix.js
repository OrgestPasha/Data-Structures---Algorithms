/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//((((matrix.length*matrix.length)-matrix.length))/2)-1
var rotate = function (matrix) {
  let length = matrix.length;

  // Transpose the matrix
  for (let row = 0; row < length; row++) {
    for (let col = row + 1; col < length; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col],
      ];
    }
  }

  // Reverse each row
  for (let row = 0; row < length; row++) {
    matrix[row].reverse();
  }
};
