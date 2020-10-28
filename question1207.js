/**
 * @name Unique Number of Occurrences
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    let map = {};
    for (let i of arr) {
        map[i] = map[i] + 1 || 1;
    }
    let num = [];
    for (let i in map) {
        num.push(map[i]);
    }
    return [...new Set(num)].length === num.length;
};
