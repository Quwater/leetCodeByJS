/**
 * @name Split a String in Balanced Strings
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
    let num = 0,
        res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            num++;
        } else {
            num--;
        }
        if (num === 0) {
            res++;
        }
    }
    return res;
};
balancedStringSplit('RLRRLL');
