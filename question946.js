/**
 * @name Validate Stack Sequences
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
    // let index = 0;
    // for (let i of popped) {
    //     for (; index < pushed.length; index++) {
    //         if (pushed[index] === i) {
    //             pushed.splice(index, 1);
    //             index -= 1;
    //             break;
    //         }
    //     }
    // }
    // return pushed.length === 0;
    let stack = [];
    let i = 0;
    for (let num of pushed) {
        stack.push(num);
        while (stack.length !== 0 && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }
    return stack.length === 0;
};

validateStackSequences([1, 2, 3], [3, 2, 1]);
