/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let y = 0;
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] !== nums[y]) {
      y++;
      nums[y] = nums[x];
    }
  }
  nums.length = y + 1;
};
