/**
 * @name Lucky Numbers in a Matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function(matrix) {
    let res = [],
        max = [],
        min = [];
    for (let i = 0; i < matrix.length; i++) {
        let num = Math.min(...matrix[i]);
        min.push(num);
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let col = [];
        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
        }
        max.push(Math.max(...col));
    }
    res = min.filter(e => max.indexOf(e) !== -1);
    return res;
};

luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
]);
