/**
 * @name Bitwise AND of Numbers Range
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function (m, n) {
    // let res = m;
    // for (let i = m; i <= n; i++) {
    //     res = res & i;
    // }
    // return res;
    let shift = 0;
    // 找到公共前缀
    while (m < n) {
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return m << shift;
};

rangeBitwiseAnd([0, 1]);
