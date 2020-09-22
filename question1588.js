/**
 * @name Sum of All Odd Length Subarrays
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function (arr) {
    let tem = 1,
        sum = 0,
        len = arr.length;
    while (tem <= len) {
        let max = tem < len - tem + 1 ? tem : len - tem + 1;
        for (let i = 0; i < len; i++) {
            if (i < max) {
                sum += arr[i] * (i + 1);
            } else if (i > len - max) {
                sum += arr[i] * (len - i);
            } else {
                sum += arr[i] * max;
            }
        }
        tem += 2;
    }
    return sum;
};

sumOddLengthSubarrays([1, 2, 3, 4, 5]);
