/**
 * @name Implement strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            // 证明一直相等到 needle结束，所以返回 i
            if (j === needle.length) {
                return i;
            }
            // 证明一直计算到超出了 haystack 的范围，所以返回-1
            if (i + j === haystack.length) {
                return -1;
            }
            if (needle.charAt(j) != haystack.charAt(i+j)) {
                break;
            }
        }
    }
};
