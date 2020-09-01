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
// O(n)
let mergeTwoLists = function (l1, l2) {
    // if (l1 == null) {
    //     return l2;
    // }
    // else if (l2 == null) {
    //     return l1;
    // }
    // else if (l1.val < l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // }
    // else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }

    let mergeHead = { val: -1, next: null },
        head = mergeHead;
    // 遍历两条链表，谁的值小，谁成为下一个元素
    // 类似mergesort方式
    while (l1 && l2) {
        if (l1.val > l2.val) {
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
mergeTwoLists();
