/**
 * @name Kth Missing Positive Number
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    let num = 0;
    let max = arr.length + k;
    for (let i = 1; i <= max; i++) {
        if (arr.includes(i)) {
            continue;
        } else {
            num++;
        }
        if (num === k) {
            return i;
        }
    }
};

findKthPositive();
