/**
 * @name Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    // O(n)
    // let str = x.toString();
    // if (str.split('').reverse().join('') === str) {
    //     return true;
    // } else {
    //     return false;
    // }

    // O(logn)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reverseNum = 0;
    while (x > reverseNum) {
        reverseNum = reverseNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return x === reverseNum || x === Math.floor(reverseNum / 10);
};
isPalindrome(121);
