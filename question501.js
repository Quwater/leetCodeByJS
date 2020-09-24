/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let findMode = function (root) {
    // let map = {},
    //     max = 0,
    //     res = [];
    // let helper = function(node) {
    //     if (!node) {
    //         return;
    //     }
    //     map[node.val] = map[node.val] + 1 || 1;
    //     max = Math.max(max, map[node.val]);
    //     helper(node.left);
    //     helper(node.right);
    // }
    // helper(root);
    // for (let i in map) {
    //     if (map[i] === max) {
    //         res.push(i);
    //     }
    // }
    // return res;

    if (!root) {
        return [];
    }
    let res = [],
        max = 0,
        curVal = root.val,
        count = 0;
    let dfs = function (node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (node.val === curVal) {
            count++;
        } else {
            count = 1;
        }
        if (count > max) {
            res = [];
            res.push(node.val);
            max = count;
        } else if (count === max) {
            res.push(node.val);
        }
        curVal = node.val;
        dfs(node.right);
    };
    dfs(root);
    return res;
};
findMode();
