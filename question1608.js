/**
 * @name Special Array With X Elements Greater Than or Equal X
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
    nums.sort((a, b) => b - a);
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i - 1] >= i && nums[i] < i) {
            return i;
        }
    }
    if (nums[len - 1] >= len) {
        return len;
    }
    return -1;
};
