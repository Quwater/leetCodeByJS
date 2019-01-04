/**
 * @param {number[]} nums
 * @return {number}
 */
// sum + m * (n - 1) = x * n
// x = minNum + m
// sum - minNum * n = m
let minMoves = function(nums) {
    min = Math.min(...nums);
    let total = nums.reduce((sum, nums) => sum + nums);
    return total - min * nums.length; 
};
