/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// O(N)
let lowestCommonAncestor = function(root, p, q) {
    let { pVal, parentVal, qVal } = val(root, p, q);
    if (pVal > parentVal && qVal > parentVal) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < parentVal && qVal < parentVal) {
        return lowestCommonAncestor(root.left, p, q);    
    } else {
        return root;
    }
};

function val(root, p, q) {
    let parentVal = root.val, pVal = p.val, qVal = q.val;
    return { pVal, parentVal, qVal };
}
