/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let hayPos = 0;
  let needPos = 0;
  while (hayPos < haystack.length) {
    if (haystack[hayPos] == needle[needPos]) {
      if (needPos == needle.length - 1) {
        return hayPos - needPos;
      }
      needPos++;
    } else {
      hayPos -= needPos;
      needPos = 0;
    }
    hayPos++;
  }
  return -1;
};
