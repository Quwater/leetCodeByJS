/**
 * @name Longest Continuous Increasing Subsequence
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let len = nums.length;
        temp = 1;
        max = 1;
    // 如果为空数组，那么返回0
    if (len === 0) {
        return 0;
    }
    // 遍历，每次比较，如果为升序，则temp加1，同时与 max 比较，一旦大于max，将其赋给max
    // 如果出现降序，初始化temp
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] < nums[i+1]) {
            temp++;
            max = Math.max(temp, max);
        } else {
            temp = 1;
        }
    }
    return max;
};
