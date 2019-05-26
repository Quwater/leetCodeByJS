/**
 * @param {number[]} heights
 * @return {number}
 */
// O(nlogn)
let heightChecker = function(heights) {
    let copy = heights.concat([]),
        arr = heights.sort((a, b) => a - b),
        res = 0;
    for (let i = 0; i < copy.length; i++) {
        if ((arr[i] !== copy[i])) {
            res++;
        }
    }
    return res;
};
heightChecker([1, 1, 4, 2, 1, 3]);