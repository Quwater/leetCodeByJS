/**
 * @name First Missing Positive
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    if (!nums) {
        return 1;
    }

    let max = Math.max(...nums);
    if (max < 0) {
        return 1;
    }

    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = 1;
    }
    for (let i = 1; i <= max + 1; i++) {
        if (!hash[i]) {
            return i;
        }
    }
};

firstMissingPositive([1, 2, 0]);
