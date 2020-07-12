/**
 * @name Last Moment Before All Ants Fall Out of a Plank
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
const getLastMoment = function (n, left, right) {
    let maxLeft = 0,
        maxRight = 0;
    if (left.length) {
        left.sort((a, b) => a - b);
        maxLeft = left[left.length - 1];
    }
    if (right.length) {
        right.sort((a, b) => a - b);
        maxRight = n - right[0];
    }
    return Math.max(maxLeft, maxRight);
};

getLastMoment(4, [4, 3], [0, 1]);
