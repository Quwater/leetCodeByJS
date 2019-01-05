/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
    let arr = nums2.filter(function (n) {
        if (nums1.includes(n)) {
            return true;
        } else {
            return false;
        }
    });
    return [...new Set (arr)];
};