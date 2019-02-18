/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Reverse Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n)
let reverseList = function(head) {
    // if (!head || !(head.next)) {
    //     return head;
    // }
    // var node = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;
    // return node;

    let pre = null,
        current = head;
    // 遍历链表
    while (current) {
        let next = current.next;
        // 将链接反向
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
};
reverseList();
