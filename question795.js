/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let numSubarrayBoundedMax = function (A, L, R) {
    // 斐波那契数列
    //     let j=0,count=0,res=0;

    //     for(let i = 0; i < A.length; i++){
    //         if (A[i] >= L && A[i] <= R) {
    //             res += i - j + 1;
    //             count = i - j + 1;
    //         } else if (A[i] < L){
    //             res += count;
    //         } else {
    //             j = i+1;
    //             count = 0;
    //         }
    //     }
    //     return res;
    let res = 0,
        start = -1,
        end = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > R)
            start = i;

        if (A[i] >= L)
            end = i;
        res += (end - start);
    }
    return res;
};
numSubarrayBoundedMax([1, 2, 1, 2], 2, 3);