/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let largestSumAfterKNegations = function(A, K) {
    A.sort((a, b) => a - b);
    let index = 0;
    for (let i = 0; i < K; i++) {
        A[index] = -A[index];
        if (index < A.length-1) {
            if (A[index] > A[index+1]) {
                index += 1;
            }
        }
    }
    return A.reduce((a, b) => a+b);
};
largestSumAfterKNegations();