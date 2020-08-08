/**
 * @name Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let left = -1,
        res = 0;
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            left = Math.max(left, map.get(s[j]));
        }
        map.set(s[j], j);
        res = Math.max(res, j - left);
    }
    return res;
};

lengthOfLongestSubstring('abc');
