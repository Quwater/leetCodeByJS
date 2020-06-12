/**
 * @name 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const res = [];
    const len = nums.length;
    if (len < 3) {
        return res;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        // Deduplication
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]]);
                // Deduplication
                while (L < R && nums[L] === nums[L + 1]) {
                    L++;
                }
                while (L < R && nums[R] === nums[R - 1]) {
                    R--;
                }
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else {
                R--;
            }
        }
    }
    return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
