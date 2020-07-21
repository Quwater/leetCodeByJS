/**
 * @name Number of Good Pairs
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
    let arr = [...new Set(nums)];
    let count = new Array(arr.length),
        res = 0;
    for (let i = 0; i < nums.length; i++) {
        let check = arr.indexOf(nums[i]);
        if (check !== -1) {
            count[check] = count[check] + 1 || 1;
        }
    }
    for (let i of count) {
        res += ((i - 1) * i) / 2;
    }
    return res;
};

numIdenticalPairs([1, 2, 3]);
