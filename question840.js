/**
 * @param {number[][]} grid
 * @return {number}
 */
let numMagicSquaresInside = function (grid) {
    let count = 0;
    for (let i = 0; i <= grid.length - 3; i++) {
        for (let j = 0; j <= grid[0].length - 3; j++) {
            if (helper(i, j, grid)) {
                count++;
            }
        }
    }
    return count;
};

function helper(x, y, grid) {
    let valid = Array(16).fill(0);

    for (let i = x; i <= x + 2; i++)
        for (let j = y; j <= y + 2; j++)
            valid[grid[i][j]]++;

    for (let v = 1; v <= 9; v++)
        if (valid[v] != 1) return false;

    for (let v = 1; v <= 9; v++)
        if (valid[v] != 1) return false;


    let a = grid[x][y] + grid[x][y + 1] + grid[x][y + 2];
    let b = grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2];
    let c = grid[x][y] + grid[x + 1][y] + grid[x + 2][y];
    let d = grid[x + 2][y] + grid[x + 2][y + 1] + grid[x + 2][y + 2];
    let e = grid[x][y + 2] + grid[x + 1][y + 2] + grid[x + 2][y + 2];
    let f = grid[x][y + 2] + grid[x + 1][y + 1] + grid[x + 2][y];
    let g = grid[x + 1][y] + grid[x + 1][y + 1] + grid[x + 1][y + 2];
    let h = grid[x][y + 1] + grid[x + 1][y + 1] + grid[x + 2][y + 1];
    if (a === b && b === c && c === d && d === e &&
        e === f && f === g && g === h) {
        return true;
    }
}
numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2]
]);