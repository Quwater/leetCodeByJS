/**
 * @name Truncate Sentence
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count++;
        }
        if (count === k && count !== 0) {
            return s.slice(0, i);
        }
        if (i === s.length - 1) {
            return s;
        }
    }
};
