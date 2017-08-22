/**
 * @name Shortest Unsorted Continuous Subarray
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // 复制数组并排序，找出不同的两个端点即可
    var arr = nums.slice(0);
    var len = nums.length;
    arr.sort(function(a, b) {
        return a - b;
    });
    var begin = 0, end = len -1;
    while (begin < len && nums[begin] === arr[begin]) {
        begin++;
    }
    while (end > begin && nums[end] === arr[end]) {
        end--;
    }
    return end - begin + 1;
};
