/**
 * @name 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
// O(N)
let maxProfit = function(prices) {
    let sum = 0;

    // 相邻价位赚钱的全部买进，不赚钱的全部避开
    for (let i = 0; i < prices.length-1; i++) {
        sum += Math.max(prices[i+1]-prices[i], 0);
    }
    return sum;
};
maxProfit([7,1,5,3,6,4]);
