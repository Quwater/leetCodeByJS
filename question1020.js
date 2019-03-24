/**
 * @param {number[]} A
 * @return {boolean}
 */
let canThreePartsEqualSum = function(A) {
    let sum = A.reduce((a, b) => a + b);
    if (sum % 3 !== 0) {
        return false;
    }
    let part = 0,
        times = 0;
    for (let i = 0; i < A.length; i++) {
        part += A[i];
        if (part !== sum / 3) {
            continue;
        }
        part = 0;
        times++;
        if (times === 3) {
            return true;
        }
    }
    return false;
};
canThreePartsEqualSum([1, 2, 3, 3]);