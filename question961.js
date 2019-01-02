/**
 * @param {number[]} A
 * @return {number}
 */
let repeatedNTimes = function(A) {
    for (let x of  A) {
        if (A.indexOf(x) !== A.lastIndexOf(x)) {
            return x
        }
    }
    return -1
};
