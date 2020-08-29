/**
 * @name Shortest Palindrome
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
    const revs = s.split('').reverse().join('');
    for (let i = 0, len = s.length; i < len; i++) {
        // 找到内部回文子字符串，然后加上非回文子字符串的部分即可
        if (s.substr(0, len - i) === revs.substr(i)) {
            return revs.substr(0, i) + s;
        }
    }

    return '';
};

shortestPalindrome('aba');
