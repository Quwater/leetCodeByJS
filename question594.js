/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
let findLHS = function(nums) {
    let res = 0,
        map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + 1) in map) {
            res = Math.max(map[nums[i]] + map[nums[i] + 1], res);
        }
    }
    return res;
};
findLHS([1,3,2,2,5,2,3,7]);