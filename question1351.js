/**
 * @name Count Negative Numbers in a Sorted Matrix
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                res += grid[0].length - j;
                break;
            }
        }
    }
    return res;
};

countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
]);
