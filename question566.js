/**
 * @name 566. Reshape the Matrix
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let matrixR = nums.length;
    let matrixC = nums[0].length;
    let numsJoin = [];
    let newNums = [];

    // 判断是否能够转换矩阵
    if (matrixR * matrixC  === r * c) {
        // 合并矩阵
        for (let i = 0; i < nums.length; i++) {
            numsJoin = numsJoin.concat(nums[i]);
        }
        // 将新的数组加入newNums
        for (let j = 1; j <= r; j++) {
            newNums.push(numsJoin.splice(0, c));
        }
        return newNums;
    } else {
        return nums;
    }

};
