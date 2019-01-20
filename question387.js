/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function(s) {
    for (let i of s) {
        if (s.indexOf(i) === s.lastIndexOf(i)) {
            return s.charAt(i);
        }
    }
    return -1;
};
firstUniqChar();