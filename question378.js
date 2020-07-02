/**
 * @name Kth Smallest Element in a Sorted Matrix
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
    // let temp = [];
    // for (let i of matrix) {
    //     temp = temp.concat(i);
    // }

    // temp.sort((a, b) => a - b);
    // return temp[k-1];

    let n = matrix.length,
        left = matrix[0][0],
        right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (check(matrix, mid, k, n)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

const check = function (matrix, mid, k, n) {
    let i = n - 1,
        j = 0,
        num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            // Add all number small than mid every row.
            num += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return num >= k;
};

kthSmallest(
    [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15],
    ],
    8
);
