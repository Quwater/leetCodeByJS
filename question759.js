/**
 * @param {number[]} arr
 * @return {number}
 */
// O(N)
let maxChunksToSorted = function(arr) {
    // [0, 1, 2... ]is the bigest number
    let res = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            res++;
        }
    }
    return res;
};
maxChunksToSorted([0, 1, 2, 3, 4]);