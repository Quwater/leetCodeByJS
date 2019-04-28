/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
let numMovesStones = function(a, b, c) {
    let arr = [a, b, c].sort((a, b) => a - b);
    let tempMax = arr[2] - arr[0] - 2;
    let left = arr[1] - arr[0],
        right = arr[2] - arr[1];
    if (left === right && left === 1) {
        return [0, 0];
    }
    let first = Math.min(left, right);
    if (first <= 2) {
        return [1, tempMax];
    } else {
        return [2, tempMax];
    }
};
numMovesStones(3, 5, 1);