/**
 * @name Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
    let color = image[sr][sc];
    // 假如要改变的颜色与原先颜色一致，则不用改变
    if (color === newColor) {
        return image;
    }
    function dfs(i, j) {
        if (
            i < 0 ||
            j < 0 ||
            i >= image.length ||
            j >= image[0].length ||
            image[i][j] !== color
        ) {
            return;
        }
        image[i][j] = newColor;
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    }
    dfs(sr, sc);
    return image;
};

floodFill();
