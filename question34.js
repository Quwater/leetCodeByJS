/**
 * @name Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    let left, right;
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let m = l + ((r - l) >> 1);
        if (nums[m] <= target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    right = r;
    if (nums[r] !== target) return [-1, -1];
    (l = 0), (r = nums.length - 1);
    while (l <= r) {
        let m = l + ((r - l) >> 1);
        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    left = l;
    return [left, right];
};
searchRange([], 0);
