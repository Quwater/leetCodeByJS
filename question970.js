/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
let powerfulIntegers = function(x, y, bound) {
    // Memory Limit Exceeded
    // O(logn)
    // let res = [];
    // for (let i = 0; Math.pow(x, i) <= bound; i++) {
    //     for (let j = 0; Math.pow(y, j) <= bound; j++) {
    //         if (Math.pow(x, i) + Math.pow(y, j) <= bound) {
    //             res.push(Math.pow(x, i) + Math.pow(y, j));
    //         }
    //     } 
    // }
    // return [...new Set(res.sort((a, b) => a - b))];

    // O(logn)
    let ans = [], used = {};
    for (let a = 1; a < bound; a *= x === 1 ? bound + 1 : x) {
        for (let b = 1; a + b <= bound; b *= y === 1 ? bound + 1 : y) {
            if (!used[a + b]) {
                ans.push(a + b);
                used[a + b] = true;
            }
        }
    }
    return ans;
};
powerfulIntegers();