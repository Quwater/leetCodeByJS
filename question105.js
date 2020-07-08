/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Construct Binary Tree from Preorder and Inorder Traversal
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let index = inorder.indexOf(preorder[0]);
    let newPreLeft = preorder.slice(1, index + 1);
    let newInLeft = inorder.slice(0, index);
    let newPreRight = preorder.slice(index + 1);
    let newInRight = inorder.slice(index + 1);
    root.left = buildTree(newPreLeft, newInLeft);
    root.right = buildTree(newPreRight, newInRight);
    return root;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
