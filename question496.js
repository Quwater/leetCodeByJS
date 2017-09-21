/**
 * @name Next Greater Element I
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var arr = [];
    for (var i = 0; i < findNums.length; i++) {
        var index = nums.indexOf(findNums[i]);
        // 遍历 下标为index 之后的 nums元素，如果大于，则加入 arr，并break
        for (var j = index; j < nums.length; j++) {
            if (nums[j] > findNums[i]) {
                arr.push(nums[j]);
                break;
            } else if (j === nums.length -1) {
                arr.push(-1);
            }
        }
    }
    return arr;
};
