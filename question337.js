/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name House Robber III
 * @param {TreeNode} root
 * @return {number}
 */
const rob = function (root) {
    const f = new Map();
    const g = new Map();
    function dfs(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        // 考虑子节点为空的情况
        f.set(
            node,
            (g.get(node.left) || 0) + (g.get(node.right) || 0) + node.val
        );
        g.set(
            node,
            Math.max(f.get(node.left) || 0, g.get(node.left) || 0) +
                Math.max(f.get(node.right) || 0, g.get(node.right) || 0)
        );
    }
    dfs(root);
    // 考虑子节点为空的情况
    return Math.max(f.get(root) || 0, g.get(root) || 0);
};
rob();
