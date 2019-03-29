/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
    if (root === null) {
        return true;
    }
    let left = depth(root.left);
    let right = depth(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
let depth = function (node) {
    if (!node) {
        return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
};