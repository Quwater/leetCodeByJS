/**
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function(s) {
    let l = 0,
        r = s.length-1;
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) {
            return isPalindrome(s, l, r-1) || isPalindrome(s, l+1, r);
        }
        l++;
        r--;
    }
    return true;
};

function isPalindrome(s, l, r) {
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
validPalindrome();