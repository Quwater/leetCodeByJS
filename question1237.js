/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
let findSolution = function(customfunction, z) {
    let res = [];
    for (let i = 1; i <= z; i++) {
        for (let j = 1; j <= z; j++) {
            if (customfunction.f(i, j) === z) {
                res.push([i, j]);
            }
        }
    }
    return res;
};
findSolution(1, 5);
