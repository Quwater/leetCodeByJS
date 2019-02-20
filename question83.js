/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Remove Duplicates from Sorted List
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
    // let first = head;
    // // 遍历链表
    // while(head && head.next) {
    //     let next = head.next;
    //     if (head.val === next.val) {
    //         // 如果下下个元素不为空，则跳过next
    //         if (next.next !== null) {
    //             next.val = next.next.val;
    //             next.next = next.next.next;
    //         } else {
    //         // 如果下下个元素为空,直接将末尾元素删掉即可
    //             head.next = null;
    //             return first;
    //         }
    //     } else {
    //         head = next;
    //     }
    // }
    // return first;
    if (!head) {
        return head;
    }

    let first = head,
        second = head.next;
    while (second != null) {
        // remove repeat element
        if (first.val === second.val) {
            first.next = second.next;
            second = second.next;
        } else {
            first = second;
            second = second.next;
        }
    }

    return head;
};
deleteDuplicates();