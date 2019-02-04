/**
 * @param {number} x
 * @return {number}
 */

// O(log(n))
let mySqrt = function(x) {
    //return Math.floor(Math.sqrt(x));
    let start = 0,
        end = x,
        mid = null;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid > x) {
            end = mid - 1;
        } else if (mid * mid < x) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start*start > x? start - 1: start;
};
mySqrt(12);