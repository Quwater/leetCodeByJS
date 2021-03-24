/**
 * @name 132 Pattern
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function (nums) {
    const len = nums.length;
    const arr = [nums[len - 1]];
    let max = -Number.MAX_SAFE_INTEGER;

    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < max) {
            return true;
        }
        while (arr.length > 0 && nums[i] > arr[arr.length - 1]) {
            max = arr[arr.length - 1];
            arr.pop();
        }
        if (nums[i] > max) {
            arr.push(nums[i]);
        }
    }
    return false;
};
