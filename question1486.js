/**
 * @name XOR Operation in an Array
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function (n, start) {
    let res = start;
    for (let i = 1; i < n; i++) {
        res = res ^ (start + 2 * i);
    }
    return res;
};

xorOperation(10, 5);
