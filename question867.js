/**
 * @param {number[][]} A
 * @return {number[][]}
 */
let transpose = function(A) {
    let B = [];
    for (let x = 0; x < A[0].length; x++) {
        B[x] = [];
        for (let y = 0; y < A.length; y++) {
            B[x][y] = A[y][x];
        }
    }
    return B;
};