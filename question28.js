/**
 * @name Implement strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle === '') {
        return 0;
    }
    let len = haystack.length - needle.length;
    for (let i = 0; i <= len; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) === needle) {
                return i;
            }
        }
    }
    return -1;
};
strStr('hello', 'll');
