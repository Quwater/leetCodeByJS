/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// O(n)
let convertBST = function(root) {
    let sum = 0;
    let helper = function(node) {
        if (!node) {
            return;
        }
        helper(node.right);
        sum += node.val;
        node.val = sum;
        helper(node.left);
    };
    helper(root);
    return root;
};
convertBST();