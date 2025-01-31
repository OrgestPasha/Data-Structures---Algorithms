/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let note = new Map();
  let mag = new Map();
  for (let char of ransomNote) {
    note.set(char, (note.get(char) || 0) + 1);
  }

  for (let char of magazine) {
    mag.set(char, (mag.get(char) || 0) + 1);
  }

  for (let [char, count] of note) {
    if (!mag.has(char) || mag.get(char) < count) {
      return false;
    }
  }
  return true;
};
