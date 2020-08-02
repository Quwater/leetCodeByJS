/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
    // if (!root) {
    //     return;
    // }
    // let arr = [];
    // dfs(root);
    // for (let i = 0; i < arr.length - 1; i++) {
    //     arr[i].left = null;
    //     arr[i].right = arr[i+1];
    // }
    // return arr[0];

    // function dfs(root) {
    //     if (!root) {
    //         return;
    //     }
    //     arr.push(root);

    //     dfs(root.left);
    //     dfs(root.right);
    // }

    // space O(1)
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.right);
        helper(root.left);

        root.right = prev;
        root.left = null;
        prev = root;
    };
    let prev = null;
    helper(root);
};

flatten();
