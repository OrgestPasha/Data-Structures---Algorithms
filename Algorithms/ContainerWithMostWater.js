/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let returnValue = 0;
  let right = height.length - 1;
  let left = 0;
  while (left < right) {
    returnValue = Math.max(
      (right - left) * Math.min(height[left], height[right]),
      returnValue
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return returnValue;
};
