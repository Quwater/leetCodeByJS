/**
 * @name Ugly Number II
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
    // dp
    let arr = new Array(n);
    arr[0] = 1;
    let i2 = 0,
        i3 = 0,
        i5 = 0;

    for (let i = 1; i < n; i++) {
        let temp = Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5);
        arr[i] = temp;

        if (arr[i] === arr[i2] * 2) {
            i2++;
        }
        if (arr[i] === arr[i3] * 3) {
            i3++;
        }
        if (arr[i] === arr[i5] * 5) {
            i5++;
        }
    }
    return arr[n - 1];
};

nthUglyNumber(2);
