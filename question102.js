/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    let res = [];
    let cur = [],
        temp = [];
    if (!root) {
        return res;
    }
    cur.push(root);
    while (cur.length !== 0) {
        temp = [];
        let len = cur.length;
        for (let i = 0; i < len; i++) {
            temp.push(cur[i].val);
            if (cur[i].left) {
                cur.push(cur[i].left);
            }
            if (cur[i].right) {
                cur.push(cur[i].right);
            }
        }
        cur = cur.slice(len);
        res.push(temp);
    }
    return res;
};

levelOrder([3, 9, 20, null, null, 15, 7]);
