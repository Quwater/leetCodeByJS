/**
 * @name String to Integer (atoi)
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
    // return parseInt(str);
    let res = str.trim().match(/^(-|\+)?\d+/g);
    let ans = Number(res);
    if (isNaN(ans)) {
        return 0;
    }
    if (ans > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (ans < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }
    return ans;
};
myAtoi('-1');
