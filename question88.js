/**
 * @name Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n -1;
    // 如果nums1[i]大于 nums2[j]，那么赋值 nums1[i],否则赋值 nums2[j]
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    // 如果 nums1[i]已赋值完毕，说明剩下的全部为 nums2[j]
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};
