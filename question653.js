/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// O(n)
let findTarget = function(root, k) {
    let map = {},
        truth = false;
    let helper = function(node) {
        if (!node) {
            return;
        }
        if ((k-node.val) in map) {
            truth = true;
        }
        map[node.val] = node.val;
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    return truth;
};
findTarget();