/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// O(n)
let levelOrderBottom = function(root) {
    let res = [],
        level = 0;
    let helper = function(node, level) {
        if (!node) {
            return;
        }
        if (res.length <= level) {
            res.push([]);
        }
        helper(node.left, level+1);
        helper(node.right, level+1);
        res[level].push(node.val);
    };
    helper(root, level);
    return res.reverse();
};
levelOrderBottom();