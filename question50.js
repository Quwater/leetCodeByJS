/**
 * @name Pow(x, n)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    let b = x,
        num = n;
    if (x === 0) {
        return 0;
    }
    if (n < 0) {
        b = 1 / x;
        num = -n;
    }
    let res = 1;
    while (num > 0) {
        // 判断末尾是否为1，即是否为奇数
        if (num & (1 === 1)) {
            res *= b;
            num--;
        } else {
            b *= b;
            // Since 2147483648 is outside the signed 32-bit range, it wraps.
            // 2147483648 >> 2 为负数,使用无符号右移
            num = num >>> 1;
        }
    }
    return res;
};

myPow(2.0, 10);
