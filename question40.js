/**
 * @name Combination Sum II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let sum = 0;
    const helper = (startIndex, arr) => {
        if (sum >= target) {
            if (sum === target) {
                res.push(arr.slice());
            }
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i - 1] === candidates[i] && i - 1 >= startIndex) {
                // 当前选项和隔壁选项一样，跳过
                continue;
            }
            sum += candidates[i];
            arr.push(candidates[i]);
            helper(i + 1, arr);
            sum -= candidates[i];
            arr.pop();
        }
    };
    helper(0, []);
    return res;
};
combinationSum2([1, 2, 3]);
