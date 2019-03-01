/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n)
let findDuplicates = function (nums) {
    // let res = [];
    // nums.sort((a, b) => a - b);
    // for (let i = 0; i < nums.length-1; i++) {
    //     if ((nums[i] === nums[i+1])) {
    //         res.push(nums[i]);
    //     }
    // }
    // return res;

    let res = [],
        temp;
    for (let i = 0; i < nums.length; i++) {
        temp = Math.abs(nums[i]) - 1;
        if (nums[temp] < 0) {
            res.push(temp + 1);
        } else {
            nums[temp] = -nums[temp];
        }
    }
    return res;
};
findDuplicates([2, 2, 1]);