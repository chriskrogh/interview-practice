/**
 * You are given an array prices where prices[i]
 * is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a
 * single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 */

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

console.log(maxProfit([5, 200, 0, 1]));

/**
 * The max profit comes from the largest subsequent number minus the min price
 */
