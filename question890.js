/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

// O(n2)
let findAndReplacePattern = function (words, pattern) {
    let res = [];
    for (let i of words) {
        if (i.length !== pattern.length) {
            continue;
        }
        let shadow = {},
            isMatch = true;
        // one on one
        for (let j = 0; j < i.length; j++) {
            if (shadow[i[j]] === undefined && !Object.values(shadow).includes(pattern[j])) {
                shadow[i[j]] = pattern[j];
            } else if (shadow[i[j]] !== pattern[j]) {
                isMatch = false;
            }
        }
        if (isMatch === true) {
            res.push(i);
        }
    }
    return res;
};
findAndReplacePattern(['abc','deq','mee','aqq','dkd','ccc'], 'abb');