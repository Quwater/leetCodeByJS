/**
 * @param {string[]} ops
 * @return {number}
 */
let calPoints = function (ops) {
    let stack = [];
    for (let i of ops) {
        if (i === '+') {
            let top = stack.pop();
            let newtop = top + stack[stack.length - 1];
            stack.push(top);
            stack.push(newtop);
        } else if (i === 'C') {
            stack.pop();
        } else if (i === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } else {
            stack.push(parseInt(i))
        }
    }
    return stack.reduce((a, b) => a + b);
};
calPoints(['5', '2', 'C', 'D', '+']);