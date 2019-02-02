/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
    // let num = 0;
    // while(Math.pow(3, num) !== n) {
    //     num++;
    //     if (Math.pow(3, num) > n) {
    //         return false;
    //     }
    // }
    // return true;
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        n = n / 3;
        if (n !== parseInt(n)) {
            return false;
        }
    }
    return true;
};
isPowerOfThree(9);