/**
 * @name Third Maximum Number
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 利用 set 去除冗余项
    nums = Array.from(new Set(nums));
    let len = nums.length;
    if (len<=2) {
        return Math.max(...nums);
    }
    nums = nums.sort((a,b)=>{return b-a;});
    return nums[2];
};
