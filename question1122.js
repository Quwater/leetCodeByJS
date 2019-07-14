/**
 * @name Relative Sort Array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray = function(arr1, arr2) {
    let map1 = {},
        other = [],
        res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            map1[arr1[i]] = map1[arr1[i]] + 1 || 1;
        } else {
            other.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in map1) {
            res = res.concat(new Array(map1[arr2[i]]).fill(arr2[i]));
        }
    }
    res = res.concat(other.sort((a, b) => a - b));
    return res;
};

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]);
