/**
 * @param {number[]} A
 * @return {number}
 */
// O(N)
let partitionDisjoint = function(A) {
    // for (let i = 0; i < A.length; i++) {
    //     if (Math.max(...A.slice(0, i+1)) <= Math.min(...A.slice(i+1))) {
    //         return i+1;
    //     }
    // }
    let leftMax = A[0];
    let tempMax = A[0];
    let res = 1;
    for (let i = 1; i < A.length; i++) {
        if (A[i] < leftMax) {
            res = i + 1;
            leftMax = tempMax;
        } else {
            tempMax = Math.max(A[i], tempMax);
        }
    }
    return res;
};
partitionDisjoint([5,0,3,8,4,6]);