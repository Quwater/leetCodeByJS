/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
    let res = 0;
    for (let i of nums) {
        if (i.toString().length % 2 === 0) {
            res++;
        }
    }
    return res;
};
findNumbers([12, 345, 2, 6, 7896]);
