/**
 * @name Shift 2D Grid
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
    let res = [],
        temp = [];
    let arr = grid.reduce((a, b) => a.concat(b));
    while (k > 0) {
        let i = arr.pop();
        arr.unshift(i);
        k--;
    }
    let len = grid[0].length;
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length === len) {
            res.push(temp);
            temp = [];
        }
    }
    return res;
};
shiftGrid(
    [
        [1, 2],
        [3, 4]
    ],
    2
);
