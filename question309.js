/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    //我们目前持有一支股票，对应的「累计最大收益」记为 f[i][0]；

    //我们目前不持有任何股票，并且处于冷冻期中，对应的「累计最大收益」记为 f[i][1]；

    //我们目前不持有任何股票，并且不处于冷冻期中，对应的「累计最大收益」记为 f[i][2]。

    if (prices.length == 0) {
        return 0;
    }

    let n = prices.length;
    let f0 = -prices[0];
    let f1 = 0;
    let f2 = 0;
    for (let i = 1; i < n; i++) {
        let newf0 = Math.max(f0, f2 - prices[i]);
        let newf1 = f0 + prices[i];
        let newf2 = Math.max(f1, f2);
        f0 = newf0;
        f1 = newf1;
        f2 = newf2;
    }

    return Math.max(f1, f2);
};

maxProfit([1, 2, 3, 0, 2]);
