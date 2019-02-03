/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // O(n)
    // if (num === 0 || num === 1) {
    //     return true;
    // }
    // for (let i = 1; i <= num / 2; i++) {
    //     if (i * i === num) {
    //         return true;
    //     } 
    // }
    // return false; 

    // O(log(n))
    let start = 0,
        end = num,
        mid = null;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};

isPerfectSquare(14);