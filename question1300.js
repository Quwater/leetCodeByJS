/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// const findBestValue = function (arr, target) {
//     let len = arr.length;
//     arr = arr.sort((a, b) => a - b);

//     let prefixSum = [],
//         tempSum = 0;
//     prefixSum[-1] = 0; // 当 target 小于数组最小值乘以数组长度，前缀和为零
//     for (let i = 0; i < len; i++) {
//         tempSum += arr[i];
//         prefixSum[i] = tempSum;
//     }

//     // 二分查找范围是：0 ~ max(arr)
//     let left = 0,
//         right = arr[len - 1],
//         mid;
//     while (left < right) {
//         mid = left + Math.floor((right - left) / 2);
//         let sum = calculateSum(arr, mid, len, prefixSum);
//         if (sum >= target) {
//             right = mid;
//         } else {
//             // 需要检测 right 和 right - 1
//             left = mid + 1;
//         }
//     }

//     // 比较 right 和 right - 1 两个数，哪一个使数组和最接近 target，返回它
//     // 这里比较 left 和 left - 1 也行，因为上面的二分结束时，left 和 right 是相等的

//     let rightSum = calculateSum(arr, right, len, prefixSum),
//         beforeRightSum = calculateSum(arr, right - 1, len, prefixSum);

//     let diffRight = Math.abs(rightSum - target),
//         diffBeforeRight = Math.abs(beforeRightSum - target);

//     return diffBeforeRight <= diffRight ? right - 1 : right;

// };

// function calculateSum(arr, mid, len, prefixSum) {
//     let sum = 0,
//         i = 0;
//     while (i < len) {
//         if (arr[i] > mid) break;
//         i++;
//     }
//     sum = (len - i) * mid + prefixSum[i - 1];
//     return sum;
// }

const findBestValue = function (arr, target) {
    let sum = 0;
    let d = 100000;

    for (let value = 0; ; value++) {
        sum = 0;
        // 求和
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > value) sum += value;
            else sum += arr[i];
        }

        // 与 targe 的距离是先变大后变小
        if (d > Math.abs(target - sum)) {
            d = Math.abs(target - sum);
        } else {
            // 之前的d 是最小距离
            return value - 1;
        }
    }
};

findBestValue([4, 9, 3], 10);
