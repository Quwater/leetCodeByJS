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
const preorder = function (root) {
    const stack = [];

    const putPreorder = node => {
        if (!node) return;

        stack.push(node.val);

        for (let i of node.children) {
            putPreorder(i);
        }
    };

    putPreorder(root);
    return stack;
};
preorder();