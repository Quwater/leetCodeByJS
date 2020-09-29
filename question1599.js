/**
 * @name Maximum Profit of Operating a Centennial Wheel
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
const minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    const max = [-Infinity, 0];
    let nums = 0;
    let len = customers.length;
    let profit = 0;
    let counts = 0;
    if (4 * boardingCost - runningCost < 0) {
        return -1;
    }
    for (let i = 0; i < len; i++) {
        nums += customers[i];
        counts++;
        if (nums >= 4) {
            profit += 4 * boardingCost - runningCost;
            nums -= 4;
        } else {
            profit += nums * boardingCost - runningCost;
            nums = 0;
        }
        if (max[0] < profit) {
            max[0] = profit;
            max[1] = counts;
        }
    }
    while (nums > 0) {
        counts++;
        if (nums >= 4) {
            profit += 4 * boardingCost - runningCost;
            nums -= 4;
        } else {
            profit += nums * boardingCost - runningCost;
            nums = 0;
        }
        if (max[0] < profit) {
            max[0] = profit;
            max[1] = counts;
        }
    }
    if (max[0] < 0) {
        return -1;
    } else {
        return max[1];
    }
};
