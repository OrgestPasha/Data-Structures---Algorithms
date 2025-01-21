/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[x];
    if (map.has(valueNeeded)) {
      return [x, map.get(valueNeeded)];
    }
    map.set(nums[i], i);
  }
  return [0, 0];
};
