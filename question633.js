/**
 * @param {number} c
 * @return {boolean}
 */
// O(sqrt(n)log(n))
let judgeSquareSum = function(c) {
    let sqrt = Math.sqrt(c);
    for (let i = 0; i <= sqrt; i++) {
        let j = Math.sqrt(c - i*i);
        if (j === Math.floor(j)) {
            return true;
        }
    }
    return false;
};
judgeSquareSum();