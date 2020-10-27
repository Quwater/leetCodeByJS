/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Binary Tree Preorder Traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    let res = [];
    const preOrder = function (root) {
        if (!root) {
            return;
        }
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    };
    preOrder(root);
    return res;
};
