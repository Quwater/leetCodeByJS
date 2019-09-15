/**
 * @name Reverse Substrings Between Each Pair of Parentheses
 * @param {string} s
 * @return {string}
 */
let reverseParentheses = function(s) {
    while (s.indexOf(')', 0) != -1) {
        let c = s.indexOf(')', 0);
        let a = s.lastIndexOf('(', c);
        let b = s
            .slice(a + 1, c)
            .split('')
            .reverse()
            .join('');
        s = s.slice(0, a) + b + s.slice(c + 1);
    }
    return s;
};

reverseParentheses('(abcd)');
