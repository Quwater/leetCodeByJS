/**
 * @name Least Number of Unique Integers after K Removals
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }
    let newArr = [...new Set(arr)].sort((a, b) => map[a] - map[b]);
    let nums = [];
    for (let i = 0; i < newArr.length; i++) {
        nums.push(map[newArr[i]]);
    }
    for (let i = 0; i < nums.length; i++) {
        k = k - nums[i];
        if (k === 0) {
            return nums.length - i - 1;
        } else if (k < 0) {
            return nums.length - i;
        }
    }
};

findLeastNumOfUniqueInts([5, 5, 4], 1);
