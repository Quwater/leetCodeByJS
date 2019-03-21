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
// O(N)
let sumOfLeftLeaves = function (root) {
    let sumLeft = 0;
    let helper = function (node) {
        if (!node) {
            return;
        }
        if (node.left) {
            if (!(node.left.left || node.left.right)) {
                sumLeft += node.left.val;
            }
            helper(node.left);
        }
        if (node.right) {
            helper(node.right);
        }
    };
    helper(root);
    return sumLeft;
};
sumOfLeftLeaves();