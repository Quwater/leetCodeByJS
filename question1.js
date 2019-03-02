/**
 * @name Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// (On)
let twoSum = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    let map = new Map();
    // 遍历，并加入哈希表中
    // 如果存在哈希表中存在(target-nums[i])，找到该值的对应 index 即可
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};
twoSum([2, 7], 9);
