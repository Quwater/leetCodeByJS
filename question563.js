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
let findTilt = function(root) {
    let res = 0;
    let helper = function(node) {
        if (!node) {
            return 0;
        }
        let left = helper(node.left);
        let right = helper(node.right);
        res += Math.abs(left - right);
        return left + right + node.val;
    };
    helper(root);
    return res;
};
findTilt();