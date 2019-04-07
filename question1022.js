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
let sumRootToLeaf = function(root) {
    let mod = 1000000007;
    let helper = function(node, val) {
        if (node === null) {
            return 0;
        }
        val = (val * 2 + node.val) % mod;
        if (node.left === null && node.right === null) {
            return val % mod;
        }
        return (helper(node.left, val) + helper(node.right, val)) % mod;
    };
    return helper(root, 0);
};
sumRootToLeaf();