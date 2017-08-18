/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
     // 重排序
     nums.sort(function(a, b) {
         return a-b;
     });
     var len = nums.length;
     // 可能最小的两位数为负数，负负得正，判断乘积
     var product = Math.max(nums[len-1] * nums[len-2] * nums[len-3], nums[0] * nums[1] * nums[len-1]);
     return product;
 };
