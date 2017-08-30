/**
 * @name Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var arr = [];
    arr.length = len;

    // 一面过来。一面过去，恰好两次都漏掉了当前索引的值
    var countRight = 1;
    for (var i = 0; i < len; i++) {
        arr[i] = countRight;
        countRight *= nums[i];
    }
    var countLeft = 1;
    for (var j = len-1; j >= 0; j--) {
        arr[j] *= countLeft;
        countLeft *= nums[j];
    }

    return arr;
};
