/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
let singleNumber = function(nums) {
    // let res = 0;
    // for (let i of nums) {
    //     // use XOR two times
    //     res ^= i;
    // }
    // return res;
    let map = {};
    for (let i of nums) {
        if (map[i]) {
            delete map[i];
        } else {
            map[i] = 1;
        }
    }
    return Object.keys(map)[0];
};
singleNumber([1, 2, 2]);