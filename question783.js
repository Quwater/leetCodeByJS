/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Minimum Distance Between BST Nodes
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function (root) {
    let min = Number.MAX_SAFE_INTEGER;
    let pre;
    const inOrder = function (root) {
        if (root === null) {
            return;
        }
        inOrder(root.left);
        if (pre) {
            min = Math.min(min, root.val - pre);
        }
        pre = root.val;
        inOrder(root.right);
    };
    inOrder(root);
    return min;
};
