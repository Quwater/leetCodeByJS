/**
 * @param {number[]} A
 * @return {boolean}
 */
let isMonotonic = function(A) {
    return (increasing(A)|| decreasing(A));
};

let increasing = function (A) {
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] > A[i+1]) {
            return false
        }
    }
    return true;
}

let decreasing = function (A) {
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] < A[i+1]) {
            return false
        }
    }
    return true;
}
