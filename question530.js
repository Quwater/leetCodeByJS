/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Minimum Absolute Difference in BST
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function (root) {
    let min = Number.MAX_SAFE_INTEGER;
    let preVal;

    const inOrder = (root) => {
        if (root == null) {
            return;
        }
        inOrder(root.left);
        if (preVal !== undefined && root.val - preVal < min) {
            min = root.val - preVal;
        }
        preVal = root.val;
        inOrder(root.right);
    };

    inOrder(root);
    return min;
};
