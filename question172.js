/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // let res = 0;
    // let str = factorial(n).toString();
    // console.log(str);
    // for (let i = str.length - 1; i > 0; i--) {
    //     if (str[i] !== '0') {
    //         break;
    //     }
    //     res++;
    // }
    // return res;

    // Since multiple of 2 is more than multiple of 5, the number of zeros is dominant by the number of 5.
    // 5 25 125 625...
    // O(logn)
    let pow = 5,
        count = 0;

    while (n >= pow) {
        count += Math.floor(n / pow);
        pow *= 5;
    }

    return count;
};
// let factorial = function(x) {
//     let sum = 1;
//     while (x >= 1) {
//         sum *= x;
//         x--;
//     }
//     return sum;
// }
trailingZeroes(100);