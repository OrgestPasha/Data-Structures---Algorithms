/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let x = 0,
    y = 0;
  while (y < t.length) {
    if (s[x] == t[y]) {
      x++;
    }
    y++;
  }
  return x == s.length;
};
