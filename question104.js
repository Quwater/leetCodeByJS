/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let max = 1,
        leftMax = Math.max(max, maxDepth(root.left) + 1),
        rightMax = Math.max(max, maxDepth(root.right) + 1);
    max = Math.max(leftMax, rightMax);
    return max;
};