/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
let isCousins = function(root, x, y) {
    let depth = {},
        parent = {};
    let dfs = function(node, par) {
        if (node !== null) {
            depth[node.val] = par !== null ? depth[par.val] + 1 : 0;
            parent[node.val] = par;
            dfs(node.left, node);
            dfs(node.right, node);
        }
    };
    dfs(root, null);
    return (depth[x] === depth[y] && parent[x] !== parent[y]);
};
isCousins();