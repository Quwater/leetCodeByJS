/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function (n) {
    // if (n < 1) {
    //     return false;
    // }
    // while (n > 1) {
    //     n = n / 3;
    //     if (n !== parseInt(n)) {
    //         return false;
    //     }
    // }
    // return true;
    if (Math.floor(n) !== n || n < 1) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    return isPowerOfThree(n / 3);
};
isPowerOfThree(9);
