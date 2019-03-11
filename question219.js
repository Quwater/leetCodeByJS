/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
    let map = {},
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            if (map[nums[i]][1]  > i - map[nums[i]][0] || map[nums[i]][1] === 0) {
                map[nums[i]] = [i, i - map[nums[i]][0]];  
            } else {
                map[nums[i]] = [i, map[nums[i]][1]];
            }   
        } else {
            map[nums[i]] = [i, 0];
        }
    }
    for (let i in map) {
        if (map[i][1] !== 0) {
            min = Math.min(min, map[i][1]);
        }
    }
    return min <= k;
    
    // let set = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     console.log(set);
    //     if (i > k) set.delete(nums[i - k - 1]);
    //     if (set.has(nums[i])) return true;
    //     set.add(nums[i]);
    // }
    // return false;
};

containsNearbyDuplicate([1, 2, 1], 0);