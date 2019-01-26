/**
 * @param {number[][]} grid
 * @return {number}
 */
let projectionArea = function (grid) {
    //     let zeroCounts = 0;
    //     for (let i = 0; i < grid.length; i++) {
    //         for (let j = 0; j < grid.length; j++) {
    //             if (grid[i][j] === 0) {
    //                 zeroCounts++;
    //             }
    //         }
    //     }
    //     let top = grid.length * grid[0].length - zeroCounts;

    //     let front = 0,
    //         side = 0;
    //     for (let i = 0; i < grid.length; i++) {
    //         front += Math.max(...grid[i]);    
    //     }
    //     for (let j = 0; j < grid[0].length; j++) {
    //         let max = 0;
    //         for (let i = 0; i < grid.length; i++) {
    //             if (grid[i][j] > max) {
    //                 max = grid[i][j];
    //             }
    //         }
    //         side += max;
    //     }
    //     return top + front + side;
    
    // more small
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        let xz = 0;
        let yz = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > 0) res++;
            if (grid[i][j] > xz) xz = grid[i][j];
            if (grid[j][i] > yz) yz = grid[j][i];
        }
        res += xz + yz;
    }
    return res;
};

projectionArea([[2]]);