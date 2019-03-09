/**
 * @param {string} s
 * @return {number}
 */
// O(n)
let longestPalindrome = function (s) {
    // let map = {},
    //     res = 0,
    //     single = false;
    // for (let i of s) {
    //     map[i] = map[i] + 1 || 1;
    // }
    // for (let i in map) {
    //     if (map[i] % 2 === 0) {
    //         res += map[i];
    //     } else if (map[i] !== 1) {
    //         res += map[i] - 1;
    //         single = true;
    //     } if (map[i] === 1) {
    //         single = true;
    //     }
    // }
    // if (single) {
    //     return res + 1;
    // } else {
    //     return res;
    // }
    let map = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            map[s[i]] = 0;
            count += 2;
        } else {
            map[s[i]] = 1;
        }
    }
    if (count < s.length) {
        count += 1;
    }
    return count;
};
longestPalindrome('ccc');