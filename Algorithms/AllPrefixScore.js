/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
  let ans = [];
  let max = 0,
    sum = 0;
  for (const n of nums) {
    max = Math.max(n, max);
    sum += n + max;
    ans.push(sum);
  }
  return ans;
};
