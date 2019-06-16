/**
 * @name Letter Tile Possibilities
 * @param {string} tiles
 * @return {number}
 */
let numTilePossibilities = function(tiles) {
    let count = new Array(26).fill(0);
    for (let c of tiles) {
        count[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;   
    }
    return dfs(count);
};
let dfs = function(arr) {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
        if (arr[i] == 0) continue;
        sum++;
        arr[i]--;
        sum += dfs(arr);
        arr[i]++;
    }
    return sum;
};
numTilePossibilities('AAB');