/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
// O(N4)
let largestOverlap = function(A, B) {
    let len = A.length;
    let count = new Array;
    for (let i = 0; i < 2 * len + 1; i++) {
        count[i] = new Array;
        for (let j = 0; j < 2 * len + 1; j++) {
            count[i][j] = 0;
        }
    }
    // count every possible delta = b - a we see.
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (A[i][j] === 1) {
                for (let i2 = 0; i2 < len; i2++) {
                    for (let j2 = 0; j2 < len; j2++) {
                        if (B[i2][j2] === 1) {
                            count[i-i2 + len][j-j2 + len] += 1;
                        }
                    }
                }
            }
        }
    } 
    
    let res = 0;
    for (let i of count) {
        for (let j of i) {
            res = Math.max(res, j);
        }
    }
    return res;
};
largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]]);