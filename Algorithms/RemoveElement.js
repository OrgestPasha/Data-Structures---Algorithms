/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] == val) {
      [nums[x], nums[nums.length - 1]] = [nums[nums.length - 1], nums[x]];
      x--;
      nums.pop();
    }
  }
  return nums.length;
};
