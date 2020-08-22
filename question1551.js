/**
 * @name Minimum Operations to Make Array Equal
 * @param {number} n
 * @return {number}
 */
const minOperations = function (n) {
    let arr = [];
    let i = 0,
        res = 0;
    while (i < n) {
        arr.push(2 * i + 1);
        i++;
    }
    let mid = (arr[0] + arr[arr.length - 1]) / 2;
    for (let i = 0; i < arr.length / 2; i++) {
        res += mid - arr[i];
    }
    return res;
};
minOperations(3);
