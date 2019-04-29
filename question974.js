/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// we have arr[j] - arr[i] equal to 0 modulo K, or equivalently arr[i] and arr[j] are the same value modulo K.
// sum(i,j)是否可以被K整除， 其实只要看sum(0,i)%K == sum(0,j)%K 就可以了
let subarraysDivByK = function(A, K) {
    let len = A.length;
    let arr = new Array(len+1).fill(0);
    for (let i = 0; i < len; i++) {
        arr[i+1] = arr[i] + A[i];
    }
    
    let count = new Array(K).fill(0);
    for (let i of arr) {
        // in case of negative number.
        count[(i % K + K) % K]++;
    }
    
    let res = 0;
    for (let i of count) {
        res += i * (i - 1) / 2;
    }
    return res;
};
subarraysDivByK([4,5,0,-2,-3,1], 5);