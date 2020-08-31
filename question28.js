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
    // for (var i = 0; ; i++) {
    //     for (var j = 0; ; j++) {
    //         if (j === needle.length) {
    //             return i;
    //         }
    //         if (i + j === haystack.length) {
    //             return -1;
    //         }
    //         if (needle.charAt(j) != haystack.charAt(i+j)) {
    //             break;
    //         }
    //     }
    // }
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
