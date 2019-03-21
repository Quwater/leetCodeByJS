/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// O(n)
let isSameTree = function(p, q) {
    // let truth = true;
    // let helper = function(a, b) {
    //     if (a && b) {
    //         helper(a.left, b.left);
    //         if (a.val !== b.val) {
    //             truth = false;
    //         }
    //         helper(a.right, b.right);
    //     } else if ((a && !b) || (!a && b)) {
    //         truth = false;
    //     }
    // }
    // helper(p, q);
    // return truth;

    // more clear!!!
    if (p === null && q === null) {
        return true;
    }
    if (q === null || p === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};