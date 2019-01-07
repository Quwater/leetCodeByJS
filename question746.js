/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function (cost) {
    let len = cost.length;
    for (let i = 2; i < len; i++) {
        cost[i] = Math.min(cost[i] + cost[i-1], cost[i] + cost[i-2]); 
    }
    return Math.min(cost[len-1], cost[len-2]);
};