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
var deleteDuplicates = function(head) {
    var first = head;
    // 遍历链表
    while(head && head.next) {
        var next = head.next;
        if (head.val === next.val) {
            // 如果下下个元素不为空，则通过复制方式删掉next
            if (next.next !== null) {
                next.val = next.next.val;
                next.next = next.next.next;
            } else {
            // 如果下下个元素为空,直接将末尾元素删掉即可
                head.next = null;
                return first;
            }
        } else {
            head = next;
        }
    }
    return first;
};
