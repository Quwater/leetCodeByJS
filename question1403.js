/**
 * @name Minimum Subsequence in Non-Increasing Order
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function (nums) {
    const sum = nums.reduce((a, b) => a + b);
    nums.sort((a, b) => a - b);
    let pre = sum,
        last = 0,
        res = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        last += nums[i];
        pre -= nums[i];
        res.push(nums[i]);
        if (last > pre) {
            return res;
        }
    }
};

minSubsequence([4, 3, 10, 9, 8]);
