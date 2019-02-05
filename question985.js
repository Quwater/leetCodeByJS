/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
let sumEvenAfterQueries = function (A, queries) {
    // O(n2)
    //     let res =[];
    //     for (let i of queries) {
    //         (A[i[1]] += i[0]);
    //         res.push(addEven(A));
    //     }
    //     return res;

    // O(n)
    let S = 0;
    for (let i of A) {
        if (i % 2 === 0) {
            S += i;
        }
    }
    let ans = [];
    for (let i of queries) {
        let val = i[0],
            index = i[1];
        if (A[index] % 2 === 0) {
            S -= A[index];
        }
        A[index] += val;
        if (A[index] % 2 === 0) {
            S += A[index];
        }
        ans.push(S);
    }
    return ans;
};
// let addEven = function(arr) {
//     let sum = 0;
//     for (let i of arr) {
//         if (i % 2 === 0) {
//             sum += i
//         }
//     }
//     return sum;
// };
sumEvenAfterQueries();