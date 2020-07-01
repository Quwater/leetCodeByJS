/**
 * @name Maximum Length of Repeated Subarray
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function (A, B) {
    let n = A.length,
        m = B.length;
    let res = 0;
    // A滑过 B
    for (let i = 0; i < n; i++) {
        let len = Math.min(m, n - i);
        let maxLen = maxLength(A, B, i, 0, len);
        res = Math.max(res, maxLen);
    }
    // B 滑过 A
    for (let i = 0; i < m; i++) {
        let len = Math.min(n, m - i);
        let maxLen = maxLength(A, B, 0, i, len);
        res = Math.max(res, maxLen);
    }
    return res;
};

const maxLength = function (arrA, arrB, addA, addB, len) {
    let res = 0,
        k = 0;
    for (let i = 0; i < len; i++) {
        if (arrA[addA + i] === arrB[addB + i]) {
            k++;
        } else {
            k = 0;
        }
        res = Math.max(res, k);
    }
    return res;
};

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
