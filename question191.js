/**
 * @name Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let res = 0;
    // let str = n.toString(2);
    // for (let i of str) {
    //     if (i === '1') {
    //         res++;
    //     }
    // }
    let cur = 1;
    for (let i = 0; i < 32; i++) {
        if ((cur & n) !== 0) {
            res++;
        }
        cur <<= 1;
    }
    return res;
};
hammingWeight(0);
