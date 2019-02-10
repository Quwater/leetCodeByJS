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
    // let wordsLen = words.length;
    // let patternLen = pattern.length;

    // let patternArr = [];
    // let result = [];

    // for (let i = 0; i < patternLen; i++) {
    //     patternArr.push(pattern.indexOf(pattern[i]));
    // }

    // for (let i = 0; i < wordsLen; i++) {
    //     let isMatch = true;
    //     for (let j = 0; j < patternLen; j++) {
    //         if (words[i].indexOf(words[i][j]) !== patternArr[j]) {
    //             isMatch = false;
    //             break;
    //         }
    //     }

    //     if (isMatch) {
    //         result.push(words[i]);
    //     }
    // }

    // return result;
};
findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb');