/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
let singleNumber = function(nums) {
    let res = 0;
    for (let i of nums) {
        // use XOR two times
        res ^= i;
    }
    return res;
};
singleNumber([1, 2, 2]);