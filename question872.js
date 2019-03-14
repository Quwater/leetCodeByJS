/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// O(n)
let leafSimilar = function(root1, root2) {
    let seq1 = [],
        seq2 = [];
    let findLeaf = function(root, arr) {
        if (!root) return;
        if (root.left === null && root.right === null) {
            arr.push(root.val);
        }
        findLeaf(root.left, arr);
        findLeaf(root.right, arr);
    };
    findLeaf(root1, seq1);
    findLeaf(root2, seq2);
    
    if (seq1.length !== seq2.length) {
        return false;
    }
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) {
            return false;
        }
    }
    return true;
};
leafSimilar();