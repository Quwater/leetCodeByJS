/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayNesting = function (nums) {
    // let set = new Set(),
    //     max = 0,
    //     current,
    //     visited = [];
    // for (let i = 0; i < nums.length; i++) {
    //     current = nums[i];
    //     if (visited.includes(current)) {
    //         continue;
    //     }
    //     while (!set.has(current)) {
    //         set.add(current);
    //         current = nums[current];
    //         visited.push(nums[current]);
    //     }
    //     max = Math.max(max, set.size);
    //     set.clear();
    // }
    // return max;

    // time O(n) space O(1)
    // let maxSize = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     let size = 0;
    //     for (let j = i; nums[j] >= 0; size++) {
    //         const nextIndex = nums[j];
    //         nums[j] = -1;
    //         j = nextIndex;
    //     }
    //     maxSize = Math.max(maxSize, size);
    // }
    // return maxSize;

    // time O(n) space O(n)
    let visited = new Array(nums.length),
        res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            let start = nums[i], count = 0;
            do {
                start = nums[start];
                count++;
                visited[start] = true;
            } while (start !== nums[i]);
            res = Math.max(res, count);
        }
    }
    return res;
};
arrayNesting([5, 4, 0, 3, 1, 6, 2]);