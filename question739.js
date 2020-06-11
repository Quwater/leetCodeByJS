/**
 * @name Daily Temperatures
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function (T) {
    // const res = [];
    // for (let i = 0; i < T.length - 1; i++) {
    //     let temp = 0;
    //     for (let j = i + 1; j < T.length; j++) {
    //         if (T[j] > T[i]) {
    //             temp++;
    //             break;
    //         } else {
    //             temp++;
    //         }
    //         if (j === T.length - 1) {
    //             temp = 0;
    //         }
    //     }
    //     res.push(temp);
    // }
    // res.push(0);
    // return res;
    let len = T.length;
    const ans = new Array(len).fill(0);
    const stack = [];
    for (let i = 0; i < len; i++) {
        while (stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {
            let preIndex = stack.pop();
            ans[preIndex] = i - preIndex;
        }
        stack.push(i);
    }
    return ans;
};

dailyTemperatures([73, 74, 75]);
