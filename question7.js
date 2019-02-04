/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    // let temp = Math.abs(x);
    // while (temp !== 0 && temp % 10 === 0) {
    //     temp /= 10;
    // }
    // let rev = temp.toString().split('').reverse().join('')
    // if (x < 0 && parseInt(rev) < Math.pow(2, 31)) {
    //     return '-' + rev;
    // } else if (x > 0 && parseInt(rev) < Math.pow(2, 31) - 1) {
    //     return rev;
    // }
    // return 0;
    let output = 0;
    // Taking care of sign
    let sign = x > 0 ? 1 : -1;
    // Trick: Make sure routine handle only one case, i.e., i > 0
    let i = Math.abs(x);
    while (i > 0) {
        let t = i % 10;
        output = output * 10 + t;
        i = Math.floor(i / 10);
    }
    // Trick: Make sure output has the same sign as the input
    output = output * sign;
    // Trap: Handle extreme cases where output is out of bound
    if (output > Math.pow(2, 31) - 1 || output < -1 * Math.pow(2, 31))
        output = 0;
    return output;
};
reverse(123);