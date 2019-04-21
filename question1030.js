/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
let allCellsDistOrder = function(R, C, r0, c0) {
    let map = {},
        res = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let distance = Math.abs(r0 - i) + Math.abs(c0 - j);
            if (map[distance]) {
                map[distance].push([i, j]);
            } else {
                map[distance] = [[i, j]];
            }
        }
    }
    for (let i = 0; i < R+C; i++) {
        let item = i + '';
        if (item in map) {
            res = res.concat(map[item]);
        }
    }
    return res;
};
allCellsDistOrder(1, 2, 0, 0);