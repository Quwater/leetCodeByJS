/**
 * @name Maximum Number of Coins You Can Get
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function (piles) {
    let res = 0;
    piles.sort((a, b) => a - b);
    let n = piles.length / 3;
    for (let i = piles.length - 2; i >= n; i -= 2) {
        res += piles[i];
    }
    return res;
};
