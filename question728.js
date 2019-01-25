/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = function(left, right) {
    let res = [];
    for (let i = left; i <= right; i++) {
        let arr = digitArr(i);
        let isDivide = true;
        if (arr.includes(0)) {
            isDivide = false;
        }
        for (let j = 0; j < arr.length; j++) {
            if (i % arr[j] !== 0) {
                isDivide = false;
            }
        }
        if (isDivide) {
            res.push(i);
        } 
    }
    return res;
};
function digitArr(num) {
    return num.toString().split('');
}
selfDividingNumbers();