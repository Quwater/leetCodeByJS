/**
 * @param {number} n
 * @return {number}
 */
// O(N)
let climbStairs = function (n) {
    // if (n === 2) {
    //     return 2;
    // }
    // if (n === 1) {
    //     return 1;
    // }
    // return climbStairs(n-1) + climbStairs(n-2);
    let q = 0,
        p = 0,
        res = 1;
    for (let i = 0; i < n; i++) {
        q = p;
        p = res;
        res = q + p;
    }
    return res;
};

climbStairs(4);
