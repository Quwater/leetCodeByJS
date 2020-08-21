/**
 * @name Sliding Window Maximum
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
    // if (nums.length === 0) {
    //     return [];
    // }
    // let max = Math.max(...nums.slice(0, k));
    // let res = [max];
    // let l = 1;
    // let r = k;
    // while (r <= nums.length - 1) {
    //     if (nums[l - 1] !== max) {
    //         max = Math.max(max, nums[r]);
    //     } else {
    //         max = Math.max(...nums.slice(l, r + 1));
    //     }
    //     res.push(max);
    //     l++;
    //     r++;
    // }
    // return res;

    // 用来保存可能是滑动窗口最大值的下标
    const stack = [];
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // 最大值的位置要被移除时，删掉
        if (stack[0] <= i - k) {
            stack.shift();
        }
        // 小于新加入的值，那么它们都不可能成为新的最大值，全部删掉
        while (nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        stack.push(i);
        // 达到窗口的长度时，开始添加窗口最大值
        if (i >= k - 1) {
            res.push(nums[stack[0]]);
        }
    }

    return res;
};
