/**
 * @param {number} n
 * @return {boolean}
 */
// O(n)
let isHappy = function(n) {
    // let nums = [];
    // while (digitSquareSum(n) !== 1) {
    //     if (nums.includes(digitSquareSum(n))) {
    //         return false;    
    //     }
    //     n = digitSquareSum(n);
    //     nums.push(n);
    // }
    // return true;
    let slow, fast;
    slow = fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while(slow !== fast);
    if (slow === 1) return true;
    else return false;
};
let digitSquareSum = function (x) {
    // let sum = 0;  
    // let arr = x.toString().split('');
    // for (let i of arr) {
    //     sum += Math.pow(i, 2); 
    // }
    // return sum;
    let sum = 0, tmp;
    do {
        tmp = x % 10;
        sum += tmp * tmp;
        x = parseInt(x / 10);
    } while (x >= 1);
    return sum;
};
isHappy(19);