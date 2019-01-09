/**
 * @name 628. Maximum Product of Three Numbers
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // 重排序
    nums.sort((a, b) => {
        return a - b;
    });
    let len = nums.length;
    // 可能最小的两位数为负数，负负得正，判断乘积
    let product = Math.max(nums[len - 1] * nums[len - 2] * nums[len - 3], nums[0] * nums[1] * nums[len - 1]);
    return product;
};