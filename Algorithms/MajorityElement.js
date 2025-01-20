/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const frequency = {};
  let maxCount = 0;
  let mostFrequentNum = null;

  nums.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  for (let num in frequency) {
    if (frequency[num] > maxCount && frequency[num] > nums.length / 2) {
      maxCount = frequency[num];
      mostFrequentNum = num;
    }
  }
  return parseInt(mostFrequentNum);
};
