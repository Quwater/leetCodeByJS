/**
 * @name Is Subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let sStart = 0,
        tStart = 0;
    while (sStart !== s.length && tStart !== t.length) {
        if (s[sStart] === t[tStart]) {
            sStart++;
            tStart++;
        } else {
            tStart++;
        }
    }
    return sStart === s.length;
};

isSubsequence('abs', 'ahbgs');
