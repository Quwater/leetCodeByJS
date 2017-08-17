/**
 * @name 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;

    // 删除‘0’，并添加到数组尾，同时遍历的 i 值暂停一次，次数达到数组长度时，结束
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
        }
        count++;
        if (count == nums.length) {
            break;
        }
    }
};

// 更好的方法，与0互换
// var moveZeroes = function(nums) {
//     int j = 0;
//     for(int i = 0; i < nums.length; i++) {
//         if(nums[i] != 0) {
//             int temp = nums[j];
//             nums[j] = nums[i];
//             nums[i] = temp;
//             j++;
//         }
//     }
// };
