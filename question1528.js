/**
 * @name Shuffle String
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
    let res = '';
    let map = new Map();
    for (let i = 0; i < indices.length; i++) {
        map.set(indices[i], i);
    }
    for (let i = 0; i < indices.length; i++) {
        res += s[map.get(i)];
    }
    return res;
};

restoreString('abc', [0, 1, 2]);
