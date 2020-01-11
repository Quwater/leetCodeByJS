/**
 * @name Find N Unique Integers Sum up to Zero
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
    let half = n / 2,
        res = [];
    for (let i = 1; i <= half; i++) {
        res.push(i);
        res.push(-i);
    }
    if (n % 2 === 0) {
        return res;
    } else {
        res.push(0);
        return res;
    }
};

sumZero(4);
