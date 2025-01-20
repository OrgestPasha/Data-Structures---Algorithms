/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let first = 0;
  let last = numbers.length - 1;
  while (true) {
    if (numbers[first] + numbers[last] > target) {
      last--;
    } else if (numbers[first] + numbers[last] < target) {
      first++;
    } else {
      return [++first, ++last];
    }
  }
};
