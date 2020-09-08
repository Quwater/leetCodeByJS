/**
 * @name Number of Ways to Split a String
 * @param {string} s
 * @return {number}
 */
const numWays = function (s) {
    let sum = 0;
    for (let i of s) {
        if (i === '1') {
            sum++;
        }
    }
    if (sum === 0) {
        return (((s.length - 1) * (s.length - 2)) / 2) % (Math.pow(10, 9) + 7);
    }
    if (sum % 3 !== 0) {
        return 0;
    }
    let left = sum / 3,
        right = (sum / 3) * 2;
    let countLeft = 1,
        countRight = 1;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
        }
        if (count === left && s[i] !== '1') {
            countLeft++;
        }
        if (count === right && s[i] !== '1') {
            countRight++;
        }
    }
    return (countLeft * countRight) % (Math.pow(10, 9) + 7);
};
numWays('000');
