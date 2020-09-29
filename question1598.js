/**
 * @name Crawler Log Folder
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
    const stack = [];
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] !== './' && logs[i] !== '../') {
            stack.push(logs[i]);
        }
        if (stack.length === 0) {
            continue;
        }
        if (logs[i] === '../') {
            stack.pop();
        }
    }
    return stack.length;
};
