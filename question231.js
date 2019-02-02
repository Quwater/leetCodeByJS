/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = function(n) {
    // let num = 0;
    // while(Math.pow(2, num) !== n) {
    //     num++;
    //     if (Math.pow(2, num) > n) {
    //         return false;
    //     }
    // }
    // return true;
    
    // 0010  0001; 0100 0011;
    //Great idea
    //O(1)
    return n > 0 && ((n & (n-1)) === 0);
};
isPowerOfTwo(4);