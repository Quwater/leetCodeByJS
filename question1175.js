/**
 * @name Prime Arrangements
 * @param {number} n
 * @return {number}
 */
let numPrimeArrangements = function(n) {
    let numPrime = 0,
        numComposite = 0,
        res = 1;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            numPrime++;
        } else {
            numComposite++;
        }
    }
    while (numPrime > 0) {
        res *= numPrime;
        res %= 1000000007;
        numPrime -= 1;
    }
    while (numComposite > 0) {
        res *= numComposite;
        res %= 1000000007;
        numComposite -= 1;
    }
    return res;
};
let isPrime = function(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n / i === parseInt(n / i)) {
            return false;
        }
    }
    return true;
};

numPrimeArrangements(5);
