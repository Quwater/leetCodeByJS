/**
 * @name 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // var count = 0;
    //
    // // 删除‘0’，并添加到数组尾，同时遍历的 i 值暂停一次，次数达到数组长度时，结束
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         nums.splice(i, 1);
    //         nums.push(0);
    //         i--;
    //     }
    //     count++;
    //     if (count == nums.length) {
    //         break;
    //     }
    // }
    let j = 0;
    // move all the nonzero elements advance
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }
    for (;j < nums.length; j++) {
        nums[j] = 0;
    }
};
