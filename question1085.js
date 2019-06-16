/**
 * @name Sum of Digits in the Minimum Number
 * @param {number[]} A
 * @return {number}
 */
let sumOfDigits = function(A) {
    let minNumStr = String(Math.min(...A)),
        sum = 0,
        res = 0;
    for (let i of minNumStr) {
        sum += parseInt(i);
    }
    if (sum % 2 === 0) {
        res = 1;
    }
    return res;
};