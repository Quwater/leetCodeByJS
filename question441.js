/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
    // O(n)
    // let ans = 1;
    // while (sum(ans) <= n) {
    //     ans++;
    //     //console.log(sum(ans));
    // }
    // return ans-1;

    // O(logn)
    let imin = 0,
        imax = n,
        i;
    while (imin < imax) {
        i = Math.floor((imin + imax) / 2) + 1;
        let num = i * (i + 1) / 2;
        if (num <= n) {
            imin = i;
        } else if (num > n) {
            imax = i - 1;
        }
    }
    return imin;
};
// let sum = (n) => n * (n + 1) / 2;
arrangeCoins(8);