/**
 * @name Maximum Ascending Subarray Sum
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
    let maxTemp = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        maxTemp += nums[i];
        if (!nums[i + 1]) {
            max = Math.max(maxTemp, max);
        } else if (nums[i] >= nums[i + 1]) {
            max = Math.max(maxTemp, max);
            maxTemp = 0;
        }
    }
    return max;
};
