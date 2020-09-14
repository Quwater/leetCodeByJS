/**
 * @name Special Positions in a Binary Matrix
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function (mat) {
    let res = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                let row = mat[i].reduce((a, b) => a + b);
                let col = 0;
                for (let k = 0; k < mat.length; k++) {
                    col += mat[k][j];
                }
                if (row === 1 && col === 1) {
                    res++;
                }
            }
        }
    }
    return res;
};
numSpecial([
    [1, 0],
    [0, 1],
]);
