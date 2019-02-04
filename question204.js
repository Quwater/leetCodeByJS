/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count = 1;
    let notPrime = {};
    if (n <= 1) {
        return 0;
    }

    if (n === 2) {
        return 0;
    }

    // for (let i = 2; i < n; i++) {
    //     if (!notPrime[i]) {
    //         count++;
    //     }
    //     for (let j = 2; i *j < n; j++) {
    //             notPrime[i*j] = true;
    //     }
    // }


    // O(nlog(n))
    const sqrt = Math.sqrt(n);

    for (let i = 3; i < n; i += 2) {
        if (notPrime[i]) {
            continue;
        }

        count++;

        if (i > sqrt) {
            continue;
        }

        for (let j = i * i; j < n; j += i * 2) {
            notPrime[j] = true;
        }
    }

    return count;
};
countPrimes(10);