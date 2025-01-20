/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;

  let prev1 = 3;
  let prev2 = 2;
  let cur = 0;

  for (let x = 3; x < n; x++) {
    cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }
  return cur;
};
