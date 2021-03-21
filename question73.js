/**
 * @name Set Matrix Zeroes
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    let x = [];
    let y = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                x.push(j);
                y.push(i);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (x.indexOf(j) !== -1 || y.indexOf(i) !== -1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};
