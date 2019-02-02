/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
    nums.sort((a, b) => (a - b));
    let dup = 0,
        arr = [];
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            dup = nums[i];
            arr = nums.slice(0, i).concat(nums.slice(i+1));
        } 
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return [dup, i+1];
        } 
    }
    return [dup, nums.length];
};
findErrorNums([2, 2, 3]);