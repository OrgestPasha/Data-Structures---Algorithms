/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;

  let tempArr = [];

  while (p1 < word1.length || p2 < word2.length) {
    tempArr.push(word1[p1]);
    tempArr.push(word2[p2]);
    p1++;
    p2++;
  }

  return tempArr.join("");
};
