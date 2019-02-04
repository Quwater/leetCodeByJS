/**
 * @param {number[]} A
 * @return {string}
 */
let largestTimeFromDigits = function (A) {
    // O(1)
    let ans = -1;
    // Choose different indices i, j, k, l as a permutation of 0, 1, 2, 3
    for (let i = 0; i < 4; ++i)
        for (let j = 0; j < 4; ++j)
            if (j != i)
                for (let k = 0; k < 4; ++k)
                    if (k != i && k != j) {
                        let l = 6 - i - j - k;

                        // For each permutation of A[i], read out the time and
                        // record the largest legal time.
                        let hours = 10 * A[i] + A[j];
                        let mins = 10 * A[k] + A[l];
                        if (hours < 24 && mins < 60)
                            ans = Math.max(ans, hours * 60 + mins);
                    }
    // format the time
    let hour = helper(Math.floor(ans / 60));
    let minute = helper(ans % 60);
    return ans >= 0 ? hour + ':' + minute : '';

};
let helper = n => n > 9 ? '' + n : '0' + n;

largestTimeFromDigits([0, 0, 0, 0]);