/**
 * @name 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var major = nums[0], count = 1;
    for (var i = 1; i < nums.length; i++) {
        // 当 count 等于0时，证明当前 major 不是大多数，换成另一个
        if (count === 0) {
            count++;
            major = nums[i];
        } else if (major === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return major;
};

//下面的算法，当数组内数字大到一定时，消耗时间太长。

// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
// }
//
// var majorityElement = function(nums) {
//     var max = getMaxOfArray(nums);
//     var arr = [];
//     arr.length = max;
//     for (var j = 0; j < arr.length; j++) {
//         arr[j] = 0;
//     }
//
//     for (var i = 0; i < nums.length; i++) {
//         arr[nums[i]-1]++;
//     }
//     for (var k = 0; k < arr.length; k++) {
//         if (arr[k] > (nums.length)/2) {
//             return k+1;
//         }
//     }
// };
