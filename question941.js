/**
 * @param {number[]} A
 * @return {boolean}
 */
let validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    }
    let max = Math.max(...A);
    let index = A.indexOf(max);
    if (index === 0 || index === A.length-1){
        return false;
    }
    for (let i = 0; i < index; i++) {
        if (A[i] >= A[i+1]) {
            return false;
        }
    }
    for (let i = index; i < A.length; i++) {
        if (A[i] <= A[i+1]) {
            return false;
        }
    }
    return true;
};