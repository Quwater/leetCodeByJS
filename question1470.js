/**
 * @name Shuffle the Array
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(nums[i]);
        res.push(nums[n + i]);
    }
    return res;
};

shuffle([1, 2, 1, 2]);
