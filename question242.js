/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n)
let isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            map[s[i]] =  map[s[i]] + 1;
        } else {
            map[s[i]] =  1;
        }
        if (map[t[i]] !== undefined) {
            map[t[i]] =  map[t[i]] - 1;
        } else {
            map[t[i]] =  -1;
        }
    }
    for (let i in map) {
        if (map[i] !== 0) {
            return false;
        }
    }
    return true;
};
isAnagram('anagram', 'nagaram');