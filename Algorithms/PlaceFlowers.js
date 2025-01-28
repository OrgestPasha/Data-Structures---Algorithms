/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let validCount = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      continue;
    }
    if (i == 0 && flowerbed[i + 1] == 1) {
      continue;
    }
    if (i == flowerbed.length - 1 && flowerbed[i - 1] == 1) {
      continue;
    }
    if (flowerbed[i + 1] == 1 || flowerbed[i - 1] == 1) {
      continue;
    }
    flowerbed[i] = 1;
    validCount++;
  }
  return validCount >= n;
};
