/**
 * @name Intersection of Three Sorted Arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
let arraysIntersection = function(arr1, arr2, arr3) {
    // let map = {},
    //     num = [];
    // for (let i of arr1) {
    //     map[i] = map[i] + 1 || 1;
    // }
    // for (let i of arr2) {
    //     map[i] = map[i] + 1 || 1;
    // }
    // for (let i of arr3) {
    //     map[i] = map[i] + 1 || 1;
    // }
    // for (let i in map) {
    //     if (map[i] === 3) {
    //        num.push(i);
    //     }
    // }
    // return num.sort((a, b) => a - b);
    let index1 = 0,
        index2 = 0,
        index3 = 0,
        res = [];
    while (
        index1 < arr1.length &&
        index2 < arr2.length &&
        index3 < arr3.length
    ) {
        if (arr1[index1] < arr2[index2] || arr1[index1] < arr3[index3]) {
            index1++;
        }
        if (arr2[index2] < arr1[index1] || arr2[index2] < arr3[index3]) {
            index2++;
        }
        if (arr3[index3] < arr1[index1] || arr3[index3] < arr2[index2]) {
            index3++;
        }
        if (arr1[index1] === arr2[index2] && arr1[index1] === arr3[index3]) {
            res.push(arr1[index1]);
            index1++;
            index2++;
            index3++;
        }
    }
    return res;
};

arraysIntersection([1, 2], [2, 3], [2, 5]);
