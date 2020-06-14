/**
 * @name The k Strongest Values in an Array
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b);
    let mid = arr[Math.floor((arr.length - 1) / 2)];
    arr.sort(function (a, b) {
        if (Math.abs(a - mid) > Math.abs(b - mid)) {
            return -1;
        }
        if (Math.abs(a - mid) === Math.abs(b - mid) && a > b) {
            return -1;
        }
        return 1;
    });
    return arr.slice(0, k);
};

getStrongest([-7, 22, 17, 3], 2);
