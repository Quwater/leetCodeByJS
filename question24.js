/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    while (head && head.next) {
        let next = head.next;
        head.next = next.next;
        next.next = head;
        pre.next = next;

        pre = head;
        head = head.next;
    }
    return dummy.next;
};
