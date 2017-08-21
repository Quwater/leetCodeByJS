/**
 * @name Contains Duplicate II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
     if(nums.length <= 1 || k < 1)
     {
         return false;
     }
     var map = {};
     // nums[i]对应的值如果不为 undefined，那么在 k 的范围内，已经有个值与其相等
     for(var i=0; i<nums.length; i++)
     {
         if(map[nums[i]] !== undefined)
         {
             return true;
         }
         else
         {
             if(i - k >=0)
             {
                 map[nums[i-k]] = undefined;
             }
             map[nums[i]] = true;
         }
     }
     return false;
 };

// 复杂度过高，通不过大量数据测试
// var containsNearbyDuplicate = function(nums, k) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j <= i+ k; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };
