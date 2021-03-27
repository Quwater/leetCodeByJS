/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @name Rotate List
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let len = 1;
    let node = head;
    while (node.next) {
        len++;
        node = node.next;
    }
    if (k % len === 0) {
        return head;
    }
    let n = len - (k % len);
    node.next = head;
    while (n > 0) {
        n--;
        head = head.next;
        node = node.next;
    }
    node.next = null;
    return head;
};
