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
let increasingBST = function(root) {
    let vals = [];
    inOrder(root, vals);
    let node = new TreeNode(0),
        cur = node;
    for (let i of vals) {
        cur.right = new TreeNode(i);
        cur = cur.right;
    }
    return node.right;
};
let inOrder = function(node, vals) {
    if (node === null) {
        return;
    }
    inOrder(node.left, vals);
    vals.push(node.val);
    inOrder(node.right, vals);
};
increasingBST();