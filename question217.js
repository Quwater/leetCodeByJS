/**
 * @name 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    // 排序后降低算法复杂度
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    }
    return false;
};
