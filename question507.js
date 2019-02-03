/**
 * @param {number} num
 * @return {boolean}
 */
let checkPerfectNumber = function (num) {
    // O(sqrt(n))
    if (num <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i * i < num; i++) {
        if (num % i === 0) {
            sum+= i;
            if (i * i !== num) {
                sum += num / i; 
            }
        }
    }
    return sum - num === num;
};
checkPerfectNumber(100);