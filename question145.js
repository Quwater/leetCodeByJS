/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @name Binary Tree Postorder Traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
    let res = [];
    const helper = function (root) {
        if (!root) {
            return;
        }
        helper(root.left);
        helper(root.right);
        res.push(root.val);
    };
    helper(root);
    return res;
};
