/**
 * @param {number[]} A
 * @return {number}
 */
// O(nlgn)
let minIncrementForUnique = function(A) {
    let arr = A.sort((a, b) => a - b),
        res = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i-1]) {
            res += arr[i-1] + 1 - arr[i];
            arr[i] = arr[i-1] + 1;
        }
    }
    return res;
};
minIncrementForUnique([1, 2, 2]);