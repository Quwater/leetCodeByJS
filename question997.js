/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// O(n)
let findJudge = function(N, trust) {
    // if (trust.length === 0) {
    //     return N;
    // }
    // let num = {},
    //     judge = 0;
    // for (let i = 0; i < trust.length; i++) {
    //     num[trust[i][1]] = num[trust[i][1]]+1 || 1;
    // }
    // for (let i in num) {
    //     if (num[i] === N-1) {
    //         judge = parseInt(i);
    //     }
    // }
    // if (judge === 0) {
    //     return -1;
    // }
    // for (let i = 0; i < trust.length; i++) {
    //     if (trust[i][0] === judge) {
    //         return -1;
    //     }
    // }
    // return judge;

    // more clean
    let arr = Array(N+1).fill(0);
    for (let i of trust) {
        arr[i[0]] -= 1;
        arr[i[1]] += 1;
    }
    for (let i = 1; i <= N; i++) {
        if (arr[i] === N-1) {
            return i;
        }
    }
    return -1;
};

findJudge(1, []);