/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    // let str = '';
    // for (let i = 1; i <= n; i++) {
    //     str += i;
    //     //console.log(str);
    //     if (str.length >= n) {
    //         return str[n-1];
    //     }
    // }

    // 9 90 900 9000
    let len = 1;
    let count = 9;
    let start = 1;

    // find the length of the number where the nth digit is from
    while (n > len * count) {
        n -= len * count;
        len += 1;
        count *= 10;
        start *= 10;
    }
    // find the actual number where the nth digit is from
    start += (n - 1) / len;
    // find the nth digit and return
    return start.toString().charAt((n - 1) % len);
};
findNthDigit();