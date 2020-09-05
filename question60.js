/**
 * @name Permutation Sequence
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
    let arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    let res = '';
    while (arr.length >= 1) {
        let num = Math.ceil(k / factorial(n - 1));
        let reminder = k % factorial(n - 1);
        res += arr.splice(num - 1, 1).join('');
        n--;
        k = reminder;
    }
    return res;
};

function factorial(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}

getPermutation(3, 3);
