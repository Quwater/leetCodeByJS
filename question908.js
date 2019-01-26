/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
let smallestRangeI = function(A, K) {
    let max = Math.max(...A);
    let min = Math.min(...A);
    
    if (max - min < K * 2){
        return 0;     
    } else {
        return (max - min - 2 * K);
    }
};
smallestRangeI([1]);