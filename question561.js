/**
 * @name 561. Array Partition I
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sum = 0;
    var newNums = nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < newNums.length; i+=2) {
        sum += newNums[i];
    }
    return sum;
};
