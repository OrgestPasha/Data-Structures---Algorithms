/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = 100001;
  for (let x = 0; x < prices.length; x++) {
    if (minPrice > prices[x]) {
      minPrice = prices[x];
    }
    maxProfit = Math.max(maxProfit, prices[x] - minPrice);
  }
  return maxProfit;
};
