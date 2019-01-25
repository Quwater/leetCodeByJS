/**
 * @param {number[]} A
 * @return {number}
 */
let peakIndexInMountainArray = function(A) {
    let max = Math.max(...A);
    return A.indexOf(max);
};
peakIndexInMountainArray();