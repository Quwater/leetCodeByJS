/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(n)
let intersect = function(nums1, nums2) {
    let map = {};
    for (let i of nums1) {
        map[i] = (map[i] + 1) || 1;
    }
    return nums2.filter(function(n) {
        if (map[n]) {
            map[n]--;
            return true;
        } 
    });
};
intersect([1, 2, 2, 1], [2, 2]);