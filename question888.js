/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
let fairCandySwap = function (A, B) {
    sum = (a, b) => a + b;
    sumA = A.reduce(sum);
    sumB = B.reduce(sum);
    let num = (sumA - sumB) / 2;

    // for (let i = 0; i < A.length; i++) {
    //     for (let j = 0; j < B.length; j++) {
    //         if (A[i] - B[j] === num) {
    //             return [A[i], B[j]];
    //         }
    //     }
    // }
    const bMap = new Map();
    B.forEach((value) => {
        if (!bMap.has(value))
            bMap.set(value, 1);
    });
    let result = [];
    A.some((value) => {
        if (bMap.has(value - num)) {
            result.push(value, value - num);
            return true;
        }
    });

    return result;
};