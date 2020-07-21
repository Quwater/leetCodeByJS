/**
 * @name Water Bottles
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function (numBottles, numExchange) {
    let res = numBottles,
        toChange = numBottles;
    while (toChange >= numExchange) {
        res += Math.floor(toChange / numExchange);
        toChange =
            Math.floor(toChange / numExchange) + (toChange % numExchange);
    }
    return res;
};

numWaterBottles(15, 4);
