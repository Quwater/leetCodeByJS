/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// O(n)
let wordPattern = function(pattern, str) {
    let arr = str.split(' '),
        mapA = {},
        mapB = {};
    if (arr.length !== pattern.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in mapA)) {
            mapA[pattern[i]] = arr[i];
        } else if (arr[i] !== mapA[pattern[i]]) {
            return false;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in mapB)) {
            mapB[arr[i]] = pattern[i];
        } else if (pattern[i] !== mapB[arr[i]]) {
            return false;
        }
    }
    return true;
};
wordPattern('ab', 'aa bb');