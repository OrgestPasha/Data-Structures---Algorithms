/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let currentNumCount = 1;
  for (let x = 0; x < nums.length; x++) {
    if (nums[x] == nums[x - 1]) {
      currentNumCount++;
      if (currentNumCount == 3) {
        nums.splice(x, 1);
        x -= 2;
        currentNumCount = 1;
      }
    } else {
      currentNumCount = 1;
    }
  }
};
