/**
 * @name Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = '';
    for (var i = 0; strs.length > 0; prefix+=strs[0][i], i++) {
        for (var j = 0; j < strs.length; j++) {
            // 如果超出其他字符串元素长度，或者当前索引的值与前一个元素索引的值不同，则返回 prefix
            if (i >= strs[j].length || (j > 0 && strs[j][i] !== strs[j-1][i])) {
                return prefix;
            }
        }
    }
    return prefix;
};
