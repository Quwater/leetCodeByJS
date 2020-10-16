/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
    // return A.map(value => Math.pow(value, 2)).sort((a, b) => a - b);
    let i = 0,
        j = A.length - 1;
    const res = [];
    while (i <= j) {
        if (A[i] * A[i] >= A[j] * A[j]) {
            res.unshift(A[i] * A[i]);
            i++;
        } else {
            res.unshift(A[j] * A[j]);
            j--;
        }
    }
    return res;
};
sortedSquares();
