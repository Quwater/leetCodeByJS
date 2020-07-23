/**
 * @name Minimum Path Sum
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0].length;
    if (m === 0 || n === 0) {
        return null;
    }
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    for (let i = 0; i <= n; i++) {
        dp[0][i] = Number.MAX_SAFE_INTEGER;
    }
    for (let i = 0; i <= m; i++) {
        dp[i][0] = Number.MAX_SAFE_INTEGER;
    }
    dp[0][0] = 0;
    dp[0][1] = 0;
    dp[1][0] = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[m][n];
};

minPathSum([1, 2], [2, 1]);
