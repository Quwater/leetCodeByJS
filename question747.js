/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = function(nums) {
    if (nums.length === 1) return 0;

    let max = Math.max(...nums);
    let i = nums.indexOf(max);
    nums.splice(i, 1);
    let secMax = Math.max(...nums);
    
    if (parseFloat(max) / 2 >= secMax) {
        return i;
    } else {
        return -1;
    }
};