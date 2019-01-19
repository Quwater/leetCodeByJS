/**
 * @param {string} s
 * @return {number}
 */
let countBinarySubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] !== s[i+1]) {
            count++;
            let j = 1;
            while (s[i - j] === s[i] && s[i+1] === s[i + j + 1]) {
                count++;
                j++;
            }
        }
    }
    return count;
};
countBinarySubstrings();