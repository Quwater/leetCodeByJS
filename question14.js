/**
 * @name Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let res = '';
    if (strs.length === 0) {
        return res;
    }
    if (strs.length === 1) {
        return strs[0];
    }
    for (let i = 0; strs.length > 0; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (
                i >= strs[0].length ||
                i >= strs[j].length ||
                strs[j][i] !== strs[0][i]
            ) {
                return res;
            }
            if (j === strs.length - 1) {
                res += strs[0][i];
            }
        }
    }
};

longestCommonPrefix(['dog', 'race', 'car']);
