/**
 * @name Minimum Size Subarray Sum
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
    // let min = Number.MAX_SAFE_INTEGER;
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = i,
    //         sum = 0;
    //     while (temp < nums.length) {
    //         sum += nums[temp];
    //         if (sum >= s) {
    //             min = Math.min(min, temp - i + 1);
    //         }
    //         temp++;
    //     }
    // }
    // if (min === Number.MAX_SAFE_INTEGER) {
    //     return 0;
    // } else {
    //     return min;
    // }
    // two pointer/ slide windows
    const int_max = Number.MAX_SAFE_INTEGER;
    let i = 0,
        sum = 0,
        ans = int_max;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= s) {
            ans = Math.min(ans, j - i + 1);
            sum -= nums[i++];
        }
    }
    return ans === int_max ? 0 : ans;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
