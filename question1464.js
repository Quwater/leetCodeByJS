/**
 * @name Maximum Product of Two Elements in an Array
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    const newArr = nums.sort((a, b) => a - b);
    const len = newArr.length;
    return (newArr[len - 1] - 1) * (newArr[len - 2] - 1);
};

maxProduct([3, 7]);
