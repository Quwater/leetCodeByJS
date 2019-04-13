/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
let maxProfit = function(prices, fee) {
    let cash = 0, hold = -prices[0];
    for (let i = 0; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
};
maxProfit([1, 3], 1);