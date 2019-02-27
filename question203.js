/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Remove Linked List Elements
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function (head, val) {
    let pointer = head;
    let prev = null;
    // 遍历链表
    while (pointer) {
        if (pointer.val === val) {
            // 如果是head 值与 val 相等，则删除head,换成新head
            if (pointer === head) {
                head = head.next;
                pointer = head;
            } else {
                // 删除当前节点
                prev.next = pointer.next;
                pointer = pointer.next;
            }
        } else {
            prev = pointer;
            pointer = pointer.next;
        }
    }

    return head;
};