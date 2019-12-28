/**
 * @name Find Numbers with Even Number of Digits
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
findNumbers([12, 234, 2, 6]);
