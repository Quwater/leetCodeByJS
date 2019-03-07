/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
// O(m*n)
let shortestCompletingWord = function (licensePlate, words) {
    let mapA = {},
        res,
        minLen = 15;
    for (let i of licensePlate) {
        if (/[a-zA-Z]/.test(i)) {
            i = i.toLowerCase();
            mapA[i] = mapA[i] + 1 || 1;
        }
    }
    for (let i of words) {
        let mapB = {};
        for (let i in mapA)
            mapB[i] = mapA[i];
        for (let j of i) {
            if (j in mapB) {
                if (mapB[j] > 1) {
                    mapB[j] -= 1;
                } else {
                    delete mapB[j];
                    if (Object.keys(mapB).length === 0 && i.length < minLen) {
                        minLen = i.length;
                        res = i;
                    }
                }
            }
        }
    }
    return res;
};
shortestCompletingWord('Ad46909', ['bad', 'add']);