/**
 * @name Count Odd Numbers in an Interval Range
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    if (low % 2 === 0 && high % 2 === 0) {
        return (high - low) / 2;
    }
    return Math.floor((high - low) / 2) + 1;
};

countOdds(3, 7);
