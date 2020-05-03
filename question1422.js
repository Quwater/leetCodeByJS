/**
 * @name Maximum Score After Splitting a String
 * @param {string} s
 * @return {number}
 */
const maxScore = function (s) {
    let total = 0,
        max = 0;
    for (let i of s) {
        if (i === '1') {
            total += 1;
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            total += 1;
        } else {
            total -= 1;
        }
        if (max < total) {
            max = total;
        }
    }
    return max;
};
maxScore('011101');
