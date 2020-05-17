/**
 * @Build an Array With Stack Operations
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
    let temp = 0,
        res = [];
    for (let i = 1; i <= n; i++) {
        if (temp === target.length) {
            break;
        }
        if (i !== target[temp]) {
            res.push('Push');
            res.push('Pop');
        } else {
            res.push('Push');
            temp += 1;
        }
    }
    return res;
};

buildArray([1, 3], 3);
