/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
let buddyStrings = function(A, B) {
    if (A.length !== B.length) {
        return false;
    }
    // if A = B like 'aa', 'aa'.
    if (A === B && [...new Set(A.split(''))].length < A.length) {
        return true;
    }
    // if A != B
    let arr = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            arr.push(A[i], B[i]);
        }
    }
    if (arr.length !== 4) {
        return false;
    } else {
        return (arr[0] === arr[3] && arr[1] === arr[2]);
    } 
};
buddyStrings();