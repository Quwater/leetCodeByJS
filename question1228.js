/**
 * @name Missing Number In Arithmetic Progression
 * @param {number[]} arr
 * @return {number}
 */
let missingNumber = function(arr) {
    let firstGap = arr[0] - arr[1],
        lastGap = arr[arr.length - 2] - arr[arr.length - 1],
        gap = 0;
    if (firstGap >= 0) {
        gap = Math.min(firstGap, lastGap);
    } else {
        gap = Math.max(firstGap, lastGap);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] !== gap) {
            return arr[i] - gap;
        }
    }
    if (gap === 0) {
        return arr[0];
    }
};
missingNumber([5, 7, 11, 13]);
