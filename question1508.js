/**
 * @name Range Sum of Sorted Subarray Sums
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = function (nums, n, left, right) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        arr.push(cur);
        for (let j = i + 1; j < nums.length; j++) {
            cur += nums[j];
            arr.push(cur);
        }
    }
    return arr
        .sort((a, b) => a - b)
        .slice(left - 1, right)
        .reduce((a, b) => a + b);
};

rangeSum([1, 2, 3, 4], 4, 1, 10);
