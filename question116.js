/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @name Populating Next Right Pointers in Each Node
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    let stack = [];
    if (!root) {
        return root;
    }
    stack.push(root);
    while (stack.length !== 0) {
        let len = stack.length;
        for (let i = 0; i < len - 1; i++) {
            stack[i].next = stack[i + 1];
        }
        stack[len - 1].next = null;
        for (let i = 0; i < len; i++) {
            if (stack[i].left) {
                stack.push(stack[i].left);
            }
            if (stack[i].right) {
                stack.push(stack[i].right);
            }
        }
        stack = stack.slice(len);
    }
    return root;
};
