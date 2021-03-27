/**
 * @name Second Largest Digit in a String
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
    let arr = [];
    for (let i of s) {
        if (/[0-9]/.test(i)) {
            arr.push(Number(i));
        }
    }
    let res = [...new Set(arr)];
    if (res.length === 0 || res.length === 1) {
        return -1;
    } else {
        let arrSorted = arr.sort((a, b) => a - b);
        for (let i = arrSorted.length - 2; i >= 0; i--) {
            if (arrSorted[i] < arrSorted[i + 1]) {
                return arrSorted[i];
            }
        }
    }
};
