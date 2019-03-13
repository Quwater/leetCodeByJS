/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
let maxDepth = function(root) {
    if (!root) return 0;
    let max = 1;
    for (let i of root.children) {
        max = Math.max(max, maxDepth(i) + 1);
    }
    return max;
};