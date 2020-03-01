/**
 * @name Sort Integers by The Number of 1 Bits
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function(arr) {
    let res = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < 14; i++) {
        for (let j of arr) {
            if (helper(j.toString(2)) === i) {
                res.push(j);
            }
        }
    }
    return res;
};

let helper = function(str) {
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        temp += parseInt(str[i]);
    }
    return temp;
};

sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]);
