/**
 * @name Sort Colors
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    const map = {};
    map[0] = 0;
    map[1] = 0;
    map[2] = 0;
    for (let i of nums) {
        map[i] = map[i] + 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < map[0]) {
            nums[i] = 0;
        } else if (i < map[0] + map[1]) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
    return nums;
};
