/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
// O(n)
let addToArrayForm = function (A, K) {
    let num = K.toString().split(''),
        newNum1 = [],
        newNum2 = [];
    // create the same length array filled with 0.
    if (A.length > num.length) {
        newNum1 = Array(A.length - num.length).fill(0).concat(num);
        newNum2 = A;
    } else {
        newNum1 = num;
        newNum2 = Array(num.length - A.length).fill(0).concat(A);
    }
    // Add one by one
    let space = 0;
    for (let i = newNum2.length - 1; i >= 0; i--) {
        newNum2[i] = newNum2[i] + parseInt(newNum1[i]) + space;
        if (newNum2[i] > 9) {
            newNum2[i] = newNum2[i] % 10;
            space = 1;
        } else {
            space = 0;
        }
    }
    if (space === 1) {
        return [1].concat(newNum2);
    } else {
        return newNum2;
    }
};
addToArrayForm([1, 2, 0, 0], 34);