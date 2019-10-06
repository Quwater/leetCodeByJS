/**
 * @name Play with Chips
 * @param {number[]} chips
 * @return {number}
 */
let minCostToMoveChips = function(chips) {
    let map = {},
        odd = 0,
        even = 0;
    for (let i of chips) {
        map[i] = map[i] + 1 || 1;
    }
    for (let i in map) {
        if (i % 2 === 0) {
            even += map[i];
        } else {
            odd += map[i];
        }
    }
    return Math.min(even, odd);
};
minCostToMoveChips([2, 2, 2, 3, 3]);
