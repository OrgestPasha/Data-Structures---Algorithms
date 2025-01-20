/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let y = searchY(matrix, matrix.length - 1, 0, target);
  if (y === null) return false;
  return searchX(matrix, y, matrix[0].length - 1, 0, target);
};

function searchY(matrix, yHigh, yLow, target) {
  if (yHigh < yLow) return null;
  const yMid = Math.floor((yHigh + yLow) / 2);
  if (target >= matrix[yMid][0] && target <= matrix[yMid][matrix[0].length - 1])
    return yMid;
  if (target < matrix[yMid][0]) return searchY(matrix, yMid - 1, yLow, target);
  if (target > matrix[yMid][matrix[0].length - 1])
    return searchY(matrix, yHigh, yMid + 1, target);
}

function searchX(matrix, y, xHigh, xLow, target) {
  if (xHigh < xLow) return false;
  const xMid = Math.floor((xHigh + xLow) / 2);
  if (target === matrix[y][xMid]) return true;
  if (target < matrix[y][xMid])
    return searchX(matrix, y, xMid - 1, xLow, target);
  if (target > matrix[y][xMid])
    return searchX(matrix, y, xHigh, xMid + 1, target);
}
