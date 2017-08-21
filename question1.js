/**
 * @name Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            // You may assume that each input would have exactly one solution,
            // and you may not use the same element twice.
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
