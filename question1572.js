/**
 * @name Matrix Diagonal Sum
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
    let res = 0;
    for (let i = 0; i < mat.length; i++) {
        res += mat[i][i];
    }
    for (let i = mat.length - 1; i >= 0; i--) {
        res += mat[i][mat.length - 1 - i];
    }
    if (mat.length % 2 !== 0) {
        let mid = Math.floor(mat.length / 2);
        res -= mat[mid][mid];
    }
    return res;
};

diagonalSum([]);
