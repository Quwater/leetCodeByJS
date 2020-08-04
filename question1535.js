/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = function (arr, k) {
    // while (count < k) {
    //     let max = Math.max(arr[0], arr[1]),
    //         min = Math.max(arr[0], arr[1]);
    //     if (arr[0] === max) {
    //         count++;
    //     } else {
    //         count = 1;
    //     }
    //     if (max === Math.max(...arr)) {
    //         return max;
    //     }
    //     arr = [max, ...arr.slice(2), min];
    // }
    // return arr[0];

    // two pointer
    let count = 0;
    let pre = 0,
        next = 1;
    while (pre < arr.length - 1) {
        if (next === arr.length - 1) {
            return Math.max(arr[pre], arr[next]);
        }
        if (arr[pre] > arr[next]) {
            count++;
            next++;
            if (count === k) {
                return arr[pre];
            }
        } else {
            count = 1;
            pre = next;
            next = pre + 1;
            if (count === k) {
                return arr[pre];
            }
        }
    }
    return arr[arr.length - 1];
};

getWinner([3, 2, 1], 10);
