/**
 * @param {number[]} A
 * @return {number}
 */
// O(N)
let maxScoreSightseeingPair = function(A) {
    let res = -Infinity,
        temp = A[0];
    for (let i = 1; i < A.length; i++) {
        res = Math.max(res, temp + A[i] - i);
        temp = Math.max(temp, A[i] + i);
    }
    return res;
};
maxScoreSightseeingPair([8,1,5,2,6]);
