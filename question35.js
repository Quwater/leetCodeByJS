/**
 * @name 35. Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // for (var i = 0; i < nums.length; i++) {
    //     if (target === nums[i]) {
    //         return i;
    //     } else if (target > nums[i] && target < nums[i+1]) {
    //         return i+1;
    //     } else if (target < nums[0]) {
    //         return 0;
    //     } else if (target > nums[nums.length-1]) {
    //         return nums.length;
    //     }
    // }

    // 二分查找
    let low = 0,
        high = nums.length-1;
    while(low<=high){
        let mid = parseInt((low+high)/2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid-1;
        } else  {
            low = mid+1;
        }
    }
    return low;
};
