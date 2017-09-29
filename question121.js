/**
 * @name 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxCur = 0,
        maxSoFar = 0;
    for (let i = 1; i < prices.length; i++) {
        // 当前最大值是一个累加的过程，但一旦累加值小于零，便重新开始计算
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
        // 当前的最大值与之前最大值比较，若大，交换
        maxSoFar = Math.max(maxSoFar, maxCur);
    }
    return maxSoFar;
};
