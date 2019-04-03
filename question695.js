/**
 * @param {number[][]} grid
 * @return {number}
 */

// O(n2)
let maxAreaOfIsland = function (grid) {
    let ans = 0,
        seen = [];
    for (let i = 0; i < grid.length; i++) {
        seen[i] = [];
        for (let j = 0; j < grid[0].length; j++) {
            seen[i][j] = false;
        }
    }
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            ans = Math.max(ans, area(r, c));
        }
    }
    return ans;


    function area(r, c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length ||
            seen[r][c] || grid[r][c] === 0) {
            return 0;
        }
        seen[r][c] = true;
        // four direction
        return (1 + area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1));
    }
};

maxAreaOfIsland([[0,1]]);