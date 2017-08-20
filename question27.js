 /**
  * @name Remove Element
  * @param {number[]} nums
  * @param {number} val
  * @return {number}
  */
 var removeElement = function(nums, val) {
     var m = 0;
     for (var i = 0; i < nums.length; i++) {
         // 将与 val 不同的值全部移到数组前方
         if (nums[i] !== val) {
             nums[m] = nums[i];
             m++;
         }
     }
     return m;
 };
