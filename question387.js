/**
 * @param {string} s
 * @return {number}
 */
// O(n)
let firstUniqChar = function(s) {
    // for (let i of s) {
    //     if (s.indexOf(i) === s.lastIndexOf(i)) {
    //         return s.charAt(i);
    //     }
    // }
    // return -1;
    let map = {};
    for (let i of s) {
        map[i] = map[i] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
firstUniqChar('leetcode');