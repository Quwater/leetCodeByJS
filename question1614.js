/**
 * @name Maximum Nesting Depth of the Parentheses
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
    let max = 0;
    const stack = [];
    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        } else if (i === ')') {
            stack.pop();
        }
        max = Math.max(max, stack.length);
    }
    return max;
};
