/**
 * @name Next Greater Element I
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
let nextGreaterElement = function(findNums, nums) {
    let arr = [];
    for (let i = 0; i < findNums.length; i++) {
        let index = nums.indexOf(findNums[i]);
        // 遍历 下标为index 之后的 nums元素，如果大于，则加入 arr，并break
        for (let j = index; j < nums.length; j++) {
            if (nums[j] > findNums[i]) {
                arr.push(nums[j]);
                break;
            } else if (j === nums.length -1) {
                arr.push(-1);
            }
        }
    }
    return arr;
};
nextGreaterElement([4,1,2], [1,3,4,2]);
