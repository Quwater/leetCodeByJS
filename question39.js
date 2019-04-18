/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// backtrack
let combinationSum = function(candidates, target) {
    let arr = [];
    let result = [];
    search(0, target);
    return result;

    function search(startIdx, target) {
        if (target === 0) return result.push(arr.slice());
        if (target < 0) return;
        if (startIdx === candidates.length) return;
        
        arr.push(candidates[startIdx]);
        search(startIdx, target - candidates[startIdx]);
        arr.pop();
        search(startIdx + 1, target);
    }
};
combinationSum([2, 3, 6, 7], 7);