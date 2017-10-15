/**
 * @name Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = [];
    const len = nums.length;
    // 如果nums 里只有一个数值，那么不做任何改变
    if (len > 1) {
        //获取最后的 k 个值
        var nums1 = nums.splice(len-k, k);
        for (let i = k-1; i >= 0; i--) {
            // 去除可能的 undefined，将其余的值倒着赋值
            if (nums1[i] !== undefined) {
                nums.splice(0, 0, nums1[i]);
                // nums.unshift(nums1[i]);
            }
        }
    }
};
