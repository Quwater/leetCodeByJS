/**
 * @name Largest Substring Between Two Equal Characters
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
    let max = -2;
    for (let i of s) {
        max = Math.max(max, s.lastIndexOf(i) - s.indexOf(i) - 1);
    }
    return max;
};
