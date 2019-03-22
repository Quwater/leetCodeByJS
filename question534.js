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
// O(n)
let diameterOfBinaryTree = function (root) {
    let ans = 1;
    let helper = function(node) {
        if (!node) {
            return 0;
        }
        let l = helper(node.left);
        let r = helper(node.right);
        ans = Math.max(ans, (l + r + 1));
        return Math.max(l, r) + 1;
    };
    helper(root);
    return ans - 1;
};
diameterOfBinaryTree();