/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name Merge Two Binary Trees
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
let mergeTrees = function(t1, t2) {
    let root = null;
    if (t1 && t2) {
        root =  new TreeNode(null);
        root.val = (t1.val) + (t2.val);
        // 递归
        root.left = mergeTrees(t1.left, t2.left);
        root.right = mergeTrees(t1.right, t2.right);
    } else if (t1) {
        root = t1;
    } else if (t2){
        root = t2;
    }
    return root;
};
