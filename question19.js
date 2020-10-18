/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @name Remove Nth Node From End of List
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    let pre = new ListNode(0);
    let first = pre,
        second = pre;
    pre.next = head;
    while (n > 0) {
        second = second.next;
        n--;
    }
    while (second.next) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return pre.next;
};
