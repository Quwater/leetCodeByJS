/**
 * @name Number of Dice Rolls With Target Sum
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */

// dp
// https://www.geeksforgeeks.org/dice-throw-dp-30/
let numRollsToTarget = function(d, f, target) {
    // if (d * f < target) {
    //     return 0;
    // }
    // let diff = target - f,
    //     temp = target,
    //     res = 0;
    // if (d === 1) {
    //     if (f >= temp) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }
    // while (temp > diff) {
    //     temp -= 1;
    //     //console.log(temp, diff);
    //     res += numRollsToTarget(d-1, f, temp) % 1000000007;
    // }
    // return res % 1000000007;
    let arr = new Array(d + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(target + 1).fill(0);
    }
    arr[0][0] = 1;
    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= f; k++) {
                if (j >= k) {
                    arr[i][j] += arr[i - 1][j - k];
                    if (arr[i][j] > 1000000007) {
                        arr[i][j] = arr[i][j] % 1000000007;
                    }
                }
            }
        }
    }
    return arr[d][target] % 1000000007;
};

numRollsToTarget(2, 5, 10);
