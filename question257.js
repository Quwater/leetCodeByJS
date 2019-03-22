/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// O(N)
let binaryTreePaths = function(root) {
    let res = [];
    if (root === null) {
        return res;
    }
    let helper = function(node, str) {
        if (!node.left && !node.right) {
            res.push(str + node.val);
        }
        if (node.left) {
            helper(node.left, str + node.val + '->');
        }
        if (node.right) {
            helper(node.right, str + node.val + '->');
        }
    };
    helper(root, '');
    return res;
};
binaryTreePaths();