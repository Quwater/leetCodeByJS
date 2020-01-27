/**
 * @name Maximum 69 Number
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function(num) {
    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '6') {
            arr[i] = '9';
            return Number(arr.join(''));
        }
    }
    return Number(arr.join(''));
};
maximum69Number(9669);
