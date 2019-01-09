/**
 * @name Maximum Average Subarray I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    var max = sum;

    for (var j = k; j < nums.length; j++) {
        // 遍历，判断加上新值减去旧值后的大小
        sum += nums[j] - nums[j - k];
        max = Math.max(max, sum);
    }

    return max / 1.0 / k;
};

// 复杂度太高，消耗时间过长
// var findMaxAverage = function(nums, k) {
//     var sum = 0;
//     var arr =[];
//     for (var i = 0; i <= nums.length-k; i++) {
//         for (var j = i; j < i + k; j++) {
//             sum += nums[j];
//         }
//         arr.push(sum/k);
//         sum = 0;
//     }
//
//     return Math.max.apply(null, arr);
// };