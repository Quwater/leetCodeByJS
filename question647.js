/**
 * @name Palindromic Substrings
 * @param {string} s
 * @return {number}
 */
const countSubstring = function (s) {
    let n = s.length,
        res = 0;
    // 回文中心有一个或者两个字符两种可能，总共2*n-1种可能
    for (let i = 0; i < 2 * n - 1; i++) {
        let l = Math.floor(i / 2),
            r = Math.floor(i / 2) + (i % 2);
        while (l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
            res++;
        }
    }
    return res;
};
countSubstring('a');
