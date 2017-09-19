/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Merge Two Sorted Lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 仅仅只是连接两条链表
    // if (l1 === null) {
    //     return l2;
    // } else {
    //     var head = l1;
    //     while (head.next) {
    //         head = head.next;
    //     }
    //     head.next = l2;
    //
    //     l1.sort();
    //     return l1;
    // }

    var mergeHead = {val: -1, next: null},
        head = mergeHead;
    // 遍历两条链表，谁的值小，谁成为下一个元素
    while(l1 && l2) {
        if(l1.val > l2.val) {
            head.next = l2;
            l2 = l2.next;
        } else {
            head.next = l1;
            l1 = l1.next;
        }
        head = head.next;
    }
    head.next = l1 || l2;

    return mergeHead.next;
};
