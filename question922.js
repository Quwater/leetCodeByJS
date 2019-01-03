/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParityII = function(A) {
    let evenNumbers = A.filter(isEven);
    let oddNumbers = A.filter(isOdd);
    for (let i = 0; i < A.length; i++) {
        if (i % 2 === 0) {
            A[i] = evenNumbers[i/2];
        } else {
            A[i] = oddNumbers[Math.floor(i/2)];
        }
    }
};

let isEven = x => (x % 2 === 0);
let isOdd = x => (x % 2 != 0);