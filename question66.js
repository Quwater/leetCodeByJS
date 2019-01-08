/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    let carry = true;
    for (let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        
        digits[i] = 0;
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
};