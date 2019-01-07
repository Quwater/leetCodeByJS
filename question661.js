/**
 * @param {number[][]} M
 * @return {number[][]}
 */
let imageSmoother = function (M) {
    const MClone = JSON.parse(JSON.stringify(M));

    M.forEach((row, rowIdx) => {
        row.forEach((element, colIdx) => {
            M[rowIdx][colIdx] = calculateNew(MClone, rowIdx, colIdx);
        });
    });

    return M;
};

// get each cell average gray scale
function calculateNew(matrix, rowIdx, colIdx) {
    let seenValues = 0;
    let cumulativeValue = 0;

    for (let row = rowIdx - 1; row <= rowIdx + 1; row++) {
        if (matrix[row] === undefined) continue;
        for (let col = colIdx - 1; col <= colIdx + 1; col++) {
            if (matrix[row][col] === undefined) continue;
            seenValues++;
            cumulativeValue += matrix[row][col];
        }
    }
    return Math.floor(cumulativeValue / seenValues);
};