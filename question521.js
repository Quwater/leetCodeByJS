/**
 * @name  Longest Uncommon Subsequence I
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a == b) {
        return -1;
    } else {
        // 如果两个字符串不相同，那么最长的不同片段，便是长的字符串一方本身
        return Math.max(a.length, b.length);
    }
};
