/**
 * @name How Many Apples Can You Put into the Basket
 * @param {number[]} arr
 * @return {number}
 */
let maxNumberOfApples = function(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > 5000) {
            return i;
        } else {
            sum += arr[i];
        }
    }
    return arr.length;
};
maxNumberOfApples([100, 200, 150, 1000]);
