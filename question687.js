/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let longestUnivaluePath = function (root) {
    let ans = 0;
    let arrowLength = function (node) {
        if (node === null) {
            return 0;
        }
        let left = arrowLength(node.left),
            right = arrowLength(node.right),
            arrowLeft = 0,
            arrowRight = 0;
        if (node.left !== null && node.left.val === node.val) {
            arrowLeft += left + 1;
        }
        if (node.right !== null && node.right.val === node.val) {
            arrowRight += right + 1;
        }
        ans = Math.max(ans, arrowLeft + arrowRight);
        return Math.max(arrowLeft, arrowRight);
    };
    arrowLength(root);
    return ans;
};
longestUnivaluePath();