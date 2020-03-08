/**
 * @name How Many Numbers Are Smaller Than the Current Number
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    let res = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) {
                res[i]++;
            }
        }
    }
    return res;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
