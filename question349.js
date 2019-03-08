/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(n+m)
let intersection = function (nums1, nums2) {
    // let arr = nums2.filter(function (n) {
    //     if (nums1.includes(n)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    // return [...new Set (arr)];

    // let res = [];
    // for (let i of nums1) {
    //     if (nums2.includes(i) && !res.includes(i)) {
    //         res.push(i);
    //     }
    // }
    // return res;

    let numMap = {};
    let result = [];
    nums1.forEach(function (num) {
        numMap[num] = 1;
    });
    nums2.forEach(function (num) {
        if (numMap[num] === 1) {
            numMap[num]++;
            result.push(num);
        }
    });
    return result;
};
intersection([1, 2], [2]);