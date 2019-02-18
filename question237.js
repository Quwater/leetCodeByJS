/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Delete Node in a Linked List
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// O(1)
let deleteNode = function(node) {
    // 我们不能删除掉这个节点，于是将节点后面的节点属性赋值给当前节点即可
    // 相当于复制后面节点到当前节点，同时跳过了后面的节点。
    node.val = node.next.val;
    node.next = node.next.next;
};
deleteNode();
