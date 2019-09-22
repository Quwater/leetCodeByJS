/**
 * @name Minimum Absolute Difference
 * @param {number[]} arr
 * @return {number[][]}
 */
let minimumAbsDifference = function(arr) {
    let res = [],
        minAbsDiff = 100000;
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < minAbsDiff) {
            minAbsDiff = arr[i] - arr[i - 1];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minAbsDiff) {
            res.push([arr[i - 1], arr[i]]);
        }
    }
    return res;
};

minimumAbsDifference([4, 2, 1, 3]);
