/**
 * @param {number[][]} A
 * @return {number[][]}
 */
let flipAndInvertImage = function (A) {
    for (let i of A) {
        invert(i)
    }
    return A
};

let invert = function (a) {
    a = a.reverse();
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            a[i] = 1;
        } else {
            a[i] = 0;
        }
    }
}