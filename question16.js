/**
 * @name 3Sum Closest
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1,
            end = nums.length - 1;
        while (start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
            if (sum > target) end--;
            else if (sum < target) start++;
            else return res;
        }
    }
    return res;
};

threeSumClosest([-1, 2, 1, -4]);
