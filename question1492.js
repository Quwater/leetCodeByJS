/**
 * @name The kth Factor of n
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
    let factors = [],
        res = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (n / i !== i) {
                factors.push(i, n / i);
            } else {
                factors.push(i);
            }
        }
    }
    factors.sort((a, b) => a - b);
    res = factors[k - 1] || -1;
    return res;
};

kthFactor(12, 3);
