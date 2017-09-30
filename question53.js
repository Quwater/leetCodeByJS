/**
 * @name Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */

// 此题与question121 Best Time to Buy and Sell Stock类似

let maxSubArray = function(nums) {
    let sumCur = nums[0],
        sumSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // 之前和值为负值，则舍掉
        sumCur = Math.max(sumCur + nums[i], nums[i]);
        sumSoFar = Math.max(sumSoFar, sumCur);
    }

    return sumSoFar;
};
