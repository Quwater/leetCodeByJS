/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Binary Search Tree to Greater Sum Tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = function (root) {
    let sum = 0;
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }
    dfs(root);
    return root;
};

bstToGst(null);
