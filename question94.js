/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Binary Tree Inorder Traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    // let res = [];
    // const helper = (root) => {
    //     if (!root) {
    //         return;
    //     }
    //     helper(root.left);
    //     res.push(root.val);
    //     helper(root.right);
    // }
    // helper(root);
    // return res;
    const res = [];
    const stack = [];

    while (root) {
        stack.push(root);
        root = root.left;
    }

    while (stack.length) {
        let root = stack.pop();
        res.push(root.val);
        root = root.right;
        while (root) {
            stack.push(root);
            root = root.left;
        }
    }
    return res;
};
inorderTraversal();
