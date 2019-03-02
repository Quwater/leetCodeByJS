/**
 * @name Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function (nums) {
    let len = nums.length;
    let arr = new Array(len);

    // 左边的乘积，右边的乘积，相乘得到结果
    let countRight = 1;
    for (let i = 0; i < len; i++) {
        arr[i] = countRight;
        countRight *= nums[i];
    }
    let countLeft = 1;
    for (let j = len - 1; j >= 0; j--) {
        arr[j] *= countLeft;
        countLeft *= nums[j];
    }
    return arr;
};
productExceptSelf([1,2,3,4]);