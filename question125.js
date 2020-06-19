/**
 * @name Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    let str = s.replace(/\W/g, '').toLowerCase();
    for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
    // if (s.length === 0) {
    //     return true;
    // }
    // var str = s.toLowerCase();
    // var arr = [];
    // for (var i = 0; i < str.length; i++) {
    //     var code = str[i].charCodeAt();
    //     // 收入的字符只能为字母或数字
    //     if (code >= 65 && code <= 90 || code >= 97 && code <= 122 ||
    //          !isNaN(parseInt(str[i]))) {
    //         arr.push(str[i]);
    //     }
    // }

    // for (var j = 0; j < arr.length / 2; j++) {
    //     if (arr[j] !== arr[arr.length - j - 1]) {
    //         return false;
    //     }
    // }
    // return true;
};
isPalindrome('A man, a plan, a canal: Panama');
