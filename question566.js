/**
 * @name 566. Reshape the Matrix
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var matrixR = nums.length;
    var matrixC = nums[0].length;
    var numsJoin = [];
    var newNums = [];

    // 判断是否能够转换矩阵
    if (matrixR * matrixC  === r * c) {
        // 合并矩阵
        for (var i = 0; i < nums.length; i++) {
            numsJoin = numsJoin.concat(nums[i]);
        }
        // 将新的数组加入newNums
        for (var j = 1; j <= r; j++) {
            newNums.push(numsJoin.splice(0, c));
        }
        return newNums;
    } else {
        return nums;
    }
};
