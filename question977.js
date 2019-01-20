/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortedSquares = function(A) {
    return A.map(value => Math.pow(value, 2)).sort((a, b) => a - b);
};
sortedSquares();