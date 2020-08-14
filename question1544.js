/**
 * @name Make The String Great
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
    if (s.length === 0) {
        return '';
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0)) === 32) {
            s = s.slice(0, i) + s.slice(i + 2);
            return makeGood(s);
        }
    }
    return s;
};
