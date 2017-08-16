/**
 * @name 485. Max Consecutive Ones
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var cnt = 0;
    for (var i = 0; i < nums.length; i++) {
        // 每确定一个1，便与 max 比较一次，如果遇到0，重置 cnt
        if (nums[i] === 1) {
            cnt += 1;
            max = Math.max(max, cnt);
        } else {
            cnt = 0;
        }
    }
    return max;
};
