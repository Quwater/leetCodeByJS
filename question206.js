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
var reverseList = function(head) {
    // if (!head || !(head.next)) {
    //     return head;
    // }
    // var node = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;
    // return node;

    var pre = null;
    // 遍历链表
    while (head) {
        var next = head.next;
        // 将链接反向
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
