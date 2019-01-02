/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var evenNumbers = A.filter(isEven);
    var oddNumbers = A.filter(isOdd);
    return evenNumbers.concat(oddNumbers)
};

var isEven = x => (x % 2 === 0);
var isOdd = x => (x % 2 != 0);
