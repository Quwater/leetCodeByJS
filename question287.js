/**
 * @name Find the Duplicate Number
 * @param {number[]} nums
 * @return {number}
 */
// O(N)
// The main idea is the same with problem Linked List Cycle II,
// https://leetcode.com/problems/linked-list-cycle-ii/.
// Use two pointers the fast and the slow. The fast one goes forward two steps each time,
// while the slow one goes only step each time. They must meet the same item when slow==fast.
// In fact, they meet in a circle, the duplicate number must be the entry point of
// the circle when visiting the array from nums[0]. Next we just need to find the
// entry point. We use a point(we can use the fast one before) to visit form begining
// with one step each time, do the same job to slow. When fast==slow, they meet at
// the entry point of the circle. The easy understood code is as follows.
let findDuplicate = function (nums) {
    // if (nums.length > 1) {
    //     var slow = nums[0];
    //     var fast = nums[nums[0]];

    //     while (slow !== fast) {
    //         slow = nums[slow];
    //         fast = nums[nums[fast]];
    //     }

    //     // 找到入口
    //     fast = 0;
    //     while (fast !== slow) {
    //         fast = nums[fast];
    //         slow = nums[slow];
    //     }
    //     return slow;
    // }
    // return -1;
    let set = new Set();
    for (let i of nums) {
        if (set.has(i)) {
            return i;
        } else {
            set.add(i);
        }
    }
    return -1;
};
findDuplicate([1, 3, 2, 2]);