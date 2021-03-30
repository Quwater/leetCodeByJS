/**
 * @name Search a 2D Matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let lowY = 0,
        highY = m - 1;
    let midY = 0;
    while (lowY < highY) {
        midY = Math.floor((lowY + highY) / 2);
        if (target === matrix[midY][n - 1]) {
            return true;
        }
        if (target > matrix[midY][n - 1]) {
            lowY = midY + 1;
        } else {
            highY = midY;
        }
    }
    let lowX = 0,
        highX = n - 1;
    let midX = 0;
    while (lowX <= highX) {
        midX = Math.floor((lowX + highX) / 2);
        if (target > matrix[lowY][midX]) {
            lowX = midX + 1;
        } else if (target === matrix[lowY][midX]) {
            return true;
        } else {
            highX = midX - 1;
        }
    }
    return false;
};
