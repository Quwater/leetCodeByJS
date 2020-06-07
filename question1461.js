/**
 * @name Check If a String Contains All Binary Codes of Size K
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
    const max = Math.pow(2, k) - 1;
    for (let i = 0; i <= max; i++) {
        let str = i.toString(2);
        let temp = '0'.repeat(k - str.length) + str;
        if (s.indexOf(temp) === -1) {
            return false;
        }
    }
    return true;
};

hasAllCodes('00110', 2);
