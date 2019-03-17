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
let averageOfLevels = function(root) {
    let res = [];
    helper(root, 0, res);
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i][0] / res[i][1];
    }
    return res;
};
let helper = function(root, level, res) {
    if (root === null) {
        return;
    }
    if(res.length <= level){
        res.push([0, 0]);
    }
    res[level] = [root.val + res[level][0], res[level][1]+1];
    helper(root.left, level+1, res);
    helper(root.right, level+1, res);
};
averageOfLevels();