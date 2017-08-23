/**
 * @name  K-diff Pairs in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var num = 0;
    var arr = [];
    nums.sort();
    for (var i = 0; i < nums.length; i++) {
       // k >= 0 同时每当有数字加上 k 后的值存在与数组中，且该值不能重复使用，并且当 k 为0时，
       // 保证该数值不为i 索引下的值
       if (k >= 0 && nums.indexOf(nums[i]+k) !== -1 && nums.indexOf(nums[i]+k) !=
       i && arr.indexOf(nums[i]) === -1) {
           num++;
           arr.push(nums[i]);
       }
    }
    return num;
};
