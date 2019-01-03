/**
 * @param {number[]} nums
 * @return {number}
 */
let findShortestSubArray = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if (x in map) {
            map[x] += 1;
        } else {
            map[x] = 1;
        }
    }

    let max = Math.max(...Object.values(map))
    let count = [];
    for (let i in map) {
        if (map[i] === max) {
            count.push(nums.lastIndexOf(parseInt(i)) - nums.indexOf(parseInt(i)));
        }          
    }
    return (Math.min(...count)+1);
};
