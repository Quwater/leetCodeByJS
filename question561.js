/**
 * @name 561. Array Partition I
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function(nums) {
    let res = 0;
    let newNums = nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < newNums.length; i+=2) {
        res += newNums[i];
    }
    return res;
};
arrayPairSum([1, 4, 2, 3]);
