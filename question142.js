/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @name Linked List Cycle II
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
    let map = new Map();
    while (head !== null) {
        if (map.get(head) === 1) {
            return head;
        }
        map.set(head, 1);
        head = head.next;
    }
    return null;
};
