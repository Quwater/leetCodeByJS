/**
 * @name Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = 0; j < nums.length; j++) {
    //         // You may assume that each input would have exactly one solution,
    //         // and you may not use the same element twice.
    //         if (i !== j && nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    let result = [];
    let map = new Map();
    // 遍历，并加入哈希表中
    // 如果存在哈希表中存在(target-nums[i])，找到该值的对应 index 即可
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            result[1] = i;
            result[0] = map.get(target - nums[i]);
            return result;
        }
        map.set(nums[i], i);
    }
    return result;
};
