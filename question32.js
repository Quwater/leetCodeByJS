/**
 * @name Longest Valid Parentheses
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    let stack = [],
        maxLen = 0;
    stack.unshift(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.unshift(i);
        } else if (s[i] === ')') {
            stack.shift();
            if (stack.length === 0) {
                stack.unshift(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[0]);
            }
        }
    }
    return maxLen;
};

longestValidParentheses('())');
