/**
 * @name Subtract the Product and Sum of Digits of an Integer
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    let sum = 0,
        product = 1;
    let str = n.toString();
    for (let i of str) {
        sum += parseInt(i);
        product *= parseInt(i);
    }
    return product - sum;
};
subtractProductAndSum(234);
