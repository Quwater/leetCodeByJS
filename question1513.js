/**
 * @name Number of Substrings With Only 1s
 * @param {string} s
 * @return {number}
 */
const numSub = function (s) {
    let arr = [];
    let count = 0,
        res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (count !== 0) {
                arr.push(count);
            }
            count = 0;
        } else {
            count++;
            if (i === s.length - 1) {
                arr.push(count);
            }
        }
    }
    for (let i of arr) {
        res += (((1 + i) * i) / 2) % 1000000007;
    }
    return res;
};

numSub('101');
