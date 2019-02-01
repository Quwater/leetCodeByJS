/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
let maxCount = function (m, n, ops) {
    if (!ops[0]) {
        return m * n;
    }
    let minX = ops[0][0],
        minY = ops[0][1];
    for (let i = 0; i < ops.length; i++) {
        if (minX > ops[i][0]) {
            minX = ops[i][0];
        }
        if (minY > ops[i][1]) {
            minY = ops[i][1];
        }
    }
    return minX * minY;
};
maxCount(3, 3, []);