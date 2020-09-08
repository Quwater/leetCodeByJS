/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    let arr = new Array(n);
    for (let i = 2; i < n; i++) {
        arr[i] = true;
    }
    let res = 0;
    for (let i = 2; i * i < n; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }
    for (let i of arr) {
        if (i) {
            res++;
        }
    }
    return res;
};
countPrimes(10);
