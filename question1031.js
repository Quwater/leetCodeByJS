/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
let maxSumTwoNoOverlap = function(A, L, M) {
    for (let i = 1; i < A.length; i++) {
        A[i] = A[i-1] + A[i];
    }
    let res = A[L + M - 1], Lmax = A[L - 1], Mmax = A[M - 1];
    for (let i = L + M; i < A.length; ++i) {
        Lmax = Math.max(Lmax, A[i - M] - A[i - L - M]);
        Mmax = Math.max(Mmax, A[i - L] - A[i - L - M]);
        res = Math.max(res, Math.max(Lmax + A[i] - A[i - M], Mmax + A[i] - A[i - L]));
    }
    return res;
};
maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2);