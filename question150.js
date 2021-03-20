/**
 * @name Evaluate Reverse Polish Notation
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const arr = ['+', '-', '*', '/'];
    const stack = [];
    for (let i of tokens) {
        if (arr.indexOf(i) !== -1) {
            let a = stack.pop();
            let b = stack.pop();
            switch (i) {
                case '+':
                    stack.push(b + a);
                    break;
                case '-':
                    stack.push(b - a);
                    break;
                case '*':
                    stack.push(b * a);
                    break;
                case '/':
                    stack.push(parseInt(b / a));
                    break;
            }
        } else {
            stack.push(Number(i));
        }
    }
    return stack[0];
};
