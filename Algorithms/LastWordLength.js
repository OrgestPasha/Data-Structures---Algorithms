/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let x = s.length - 1;
  let count = 0;
  let flag = false;

  while (x >= 0) {
    if (s[x] === " " && !flag) {
      x--;
      continue;
    } else if (s[x] === " " && flag) {
      return count;
    } else {
      flag = true;
      count++;
    }
    x--;
  }
  return count; // In case the last word is at the start
};
