/**
 * @name Decrease Elements To Make Array Zigzag
 * @param {number[]} nums
 * @return {number}
 */
// O(N)
const movesToMakeZigzag = function(nums) {
    if (nums.length === 1 || nums.length === 2) {
        return 0;
    }
    let evenNum = 0,
        oddNum = 0,
        nums1 = [...nums],
        nums2 = [...nums];
    for (let i = 1; i < nums1.length; i += 2) {
        if (nums1[i] >= nums1[i - 1]) {
            evenNum += nums1[i] - nums1[i - 1] + 1;
            nums1[i] = nums1[i - 1] - 1;
        }
        if (nums1[i] >= nums1[i + 1]) {
            evenNum += nums1[i] - nums1[i + 1] + 1;
            nums1[i] = nums1[i + 1] - 1;
        }
    }
    for (let i = 1; i < nums2.length; i += 2) {
        if (nums2[i] <= nums2[i - 1]) {
            oddNum += nums2[i - 1] - nums2[i] + 1;
            nums2[i - 1] = nums2[i] - 1;
        }
        if (nums2[i] <= nums2[i + 1]) {
            oddNum += nums2[i + 1] - nums2[i] + 1;
            nums2[i + 1] = nums2[i] - 1;
        }
    }
    return Math.min(evenNum, oddNum);
};
movesToMakeZigzag([1, 2, 3]);
