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
let findSecondMinimumValue = function(root) {
    // let res = [];
    // let helper = function(node) {
    //     if (!node) {
    //         return;
    //     }
    //     res.push(node.val);
    //     helper(node.left);
    //     helper(node.right);
    // }
    // helper(root)
    // return [...new Set(res)].sort((a,b) => a - b)[1] || -1;

    
    let min = root.val,
        ans = Number.MAX_SAFE_INTEGER;
    let helper = function(node) {
        if (node !== null) {
            if (min < node.val && node.val < ans) {
                ans = node.val;
            } else if (min === node.val) {
                helper(node.left);
                helper(node.right);
            }
        }
    };
    helper(root);
    return ans < Number.MAX_SAFE_INTEGER ? ans : -1;    
};
findSecondMinimumValue();