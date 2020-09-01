/**
 * @name Predict the Winner
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = function (nums) {
    const helper = (i, j) => {
        if (i == j) {
            // 递归的出口，此时只有一个选择，并且没有剩余的可选
            return nums[i];
        }
        const pickI = nums[i] - helper(i + 1, j); // 选择左端
        const pickJ = nums[j] - helper(i, j - 1); // 选择右端
        return Math.max(pickI, pickJ); // 取较大者
    };

    return helper(0, nums.length - 1) >= 0;

    // let len = nums.length;
    // let dp = new Array(len);
    // for (let i = 0; i < len; i++) {
    //     dp[i] = new Array(len).fill(0);
    // }
    // for (let i = 0; i < len; i++) {
    //     dp[i][i] = nums[i];
    // }
    //  for (let i = len - 2; i >= 0; i--) {
    //     for (let j = i + 1; j < len; j++) {
    //    // 以 i, j 为边界的先手后手结果之差
    //         dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    //     }
    // }
    // return dp[0][len - 1] >= 0;
};

PredictTheWinner([1, 5, 2]);
