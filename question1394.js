/**
 * @name Find Lucky Integer in an Array
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
    let map = {},
        luckyNum = [];
    for (let i of arr) {
        map[i] = map[i] + 1 || 1;
    }
    for (let i in map) {
        if (map[i] === Number(i)) {
            luckyNum.push(i);
        }
    }
    if (luckyNum.length === 0) {
        return -1;
    }
    return Math.max(...luckyNum);
};

findLucky([2, 2, 3, 4]);
