/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n)
let containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
containsDuplicate([1, 2, 3, 1]);