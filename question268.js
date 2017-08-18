/**
 * @name 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort(function(a, b) {
        return a-b;
    });
    var n = nums.length;
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum += nums[i];
    }
    // 0~n个数的和减去数组之和，得到漏掉的数
    return (n*(n+1)/2 - sum);
};
