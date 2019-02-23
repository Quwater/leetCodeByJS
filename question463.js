/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n2)
let islandPerimeter = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                if (!grid[i - 1] || grid[i - 1][j] !== 1) {
                    res++;
                }
                if (!grid[i + 1] || grid[i + 1][j] !== 1) {
                    res++;
                }
                if (grid[i][j - 1] !== 1) {
                    res++;
                }
                if (grid[i][j + 1] !== 1) {
                    res++;
                }
            }
        }
    }
    return res;
};
islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]);