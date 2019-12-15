/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Convert Binary Number in a Linked List to Integer
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
    let str = '';
    while (head) {
        str += head.val;
        head = head.next;
    }
    return parseInt(str, 2);
};
getDecimalValue([1, 0, 1]);
