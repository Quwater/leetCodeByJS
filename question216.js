/**
 * @name Combination Sum III
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function (k, n) {
    let res = [];

    function helper(temp, need, start) {
        if (temp.length === k && need === 0) {
            res.push(temp.slice());
        } else {
            for (let i = start; i <= 9; i++) {
                if (i > need) break;
                temp.push(i);
                helper(temp, need - i, i + 1);
                temp.pop();
            }
        }
    }
    helper([], n, 1);
    return res;
};
combinationSum3(3, 7);