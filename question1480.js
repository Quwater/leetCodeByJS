/**
 * @name Running Sum of 1d Array
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
    const res = [];
    res.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        res.push(res[res.length - 1] + nums[i]);
    }
    return res;
};

runningSum([1, 2, 3, 4]);
