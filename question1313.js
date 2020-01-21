/**
 * @name Decompress Run-Length Encoded List
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
    let res = [];
    for (let i = 0; 2 * i + 1 < nums.length; i++) {
        for (let j = 0; j < nums[2 * i]; j++) {
            res.push(nums[2 * i + 1]);
        }
    }
    return res;
};
decompressRLElist([1, 2, 3]);
