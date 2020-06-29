/**
 * @name Kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
};

findKthLargest([3, 2, 5, 1, 5], 2);
