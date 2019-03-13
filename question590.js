/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root) {
    const stack = [];

    const putPreorder = node => {
        if (!node) return;

        for (let i of node.children) {
            putPreorder(i);
        }
        
        stack.push(node.val);
    };

    putPreorder(root);
    return stack;
};
postorder();