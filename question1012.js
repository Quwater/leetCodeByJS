/**
 * @param {number} N
 * @return {number}
 */
let bitwiseComplement = function(N) {
    let str = '',
        newStr = '',
        res = 0;
    if (N === 0) {
        return 1;
    }
    while (N >= 1) {
        let temp = N % 2;
        str = temp + str;
        N = parseInt(N / 2);
    }
    for (let i of str) {
        if (i === '0') {
            newStr += '1';
        } else {
            newStr += '0';
        }
    }
    let level = 1;
    for (let i = newStr.length-1; i >= 0; i--) {
        res += newStr[i] * level;
        level *= 2;
    }
    return res;
};
bitwiseComplement();