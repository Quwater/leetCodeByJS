/**
 * @name Maximum Length of Subarray With Positive Product
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
    return Math.max(getMax(nums), getMax(nums.reverse()));
};

function getMax(nums) {
    let max = 0,
        negtiveNum = 0,
        tempMax = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (negtiveNum === 0) {
                tempMax[0]++;
            } else {
                tempMax[1]++;
            }
        } else if (nums[i] === 0) {
            tempMax = [0, 0];
            negtiveNum = 0;
        } else {
            negtiveNum++;
            if (negtiveNum === 2) {
                tempMax[0] += 2 + tempMax[1];
                tempMax[1] = 0;
                negtiveNum = 0;
            }
        }
        max = Math.max(max, tempMax[0], tempMax[1]);
    }
    return max;
}
