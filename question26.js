/**
 * @name  Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // for (var i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i-1]) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    let len = nums.length;
    if (len < 2) {
        return len;
    }
    let id = 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[id++] = nums[i];
        }
    }
    return num;
};
