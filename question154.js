/**
 * @name Find Minimum in Rotated Sorted Array II
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] < nums[i-1]) {
    //         return nums[i];
    //     }
    //     if (i === nums.length - 1) {
    //         return nums[0];
    //     }
    // }
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            right -= 1;
        }
    }
    return nums[left];
};

findMin([2, 2, 2, 0, 1]);
