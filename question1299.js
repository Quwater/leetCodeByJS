/**
 * @name Replace Elements with Greatest Element on Right Side
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let newArr = arr.slice(i + 1);
        arr[i] = Math.max(...newArr);
    }
    arr[arr.length - 1] = -1;
    return arr;
};

replaceElements([17, 18, 5, 4, 6, 1]);
