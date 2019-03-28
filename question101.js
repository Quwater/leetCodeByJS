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
let isSymmetric = function(root) {
    return helper(root, root);
};
let helper = function(node1, node2) {
    if (node1 === null && node2 === null) {
        return true;
    } else if (node1 === null || node2 === null) {
        return false;
    }
    return (node1.val === node2.val) && helper(node1.left, node2.right) && helper(node1.right, node2.left);    
};
isSymmetric();