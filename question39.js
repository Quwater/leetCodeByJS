/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// backtrack
let combinationSum = function (candidates, target) {
    // let arr = [];
    // let result = [];
    // search(0, target);
    // return result;

    // function search(startIdx, target) {
    //     if (target === 0) return result.push(arr.slice());
    //     if (target < 0) return;
    //     if (startIdx === candidates.length) return;

    //     arr.push(candidates[startIdx]);
    //     search(startIdx, target - candidates[startIdx]);
    //     arr.pop();
    //     search(startIdx + 1, target);
    // }
    let res = [];
    let sum = 0;
    const helper = (startIndex, temp) => {
        if (sum >= target) {
            if (sum === target) {
                res.push(temp.slice());
            }
            return; // 结束当前递归
        }
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            temp.push(candidates[i]);
            helper(i, temp);
            sum -= candidates[i];
            temp.pop();
        }
    };
    helper(0, []);
    return res;
};
combinationSum([2, 3, 6, 7], 7);
