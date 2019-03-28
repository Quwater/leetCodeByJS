/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// O(M*N)
let isSubtree = function (s, t) {
    return traverse(s, t);
};

let isEqual = function (node1, node2) {
    if (node1 === null && node2 === null) {
        return true;
    }
    if (node1 === null || node2 === null) {
        return false;
    }
    return (node1.val === node2.val) && isEqual(node1.left, node2.left) && isEqual(
        node1.right, node2.right);
};

let traverse = function (node1, node2) {
    return (node1 !== null) && (isEqual(node1, node2) || traverse(node1.left, node2) || traverse(node1.right, node2));
};

isSubtree();