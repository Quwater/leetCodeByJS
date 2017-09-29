/**
 * @name 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += nums[i];
    }
    // 0~n个数的和减去数组之和，得到漏掉的数
    return (n*(n+1)/2 - sum);
};
