/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name Palindrome Linked List
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var first = head;
    // 遍历链表，并增加 pre 属性
    while (first&&first.next) {
        var temp = first;
        first = first.next;
        first.pre = temp;
    }
    var tail = first;
    // 从两个方向同时遍历链表，判断首尾是否相等，如果不等，返回false
    while (head && tail) {
        if (head.val !== tail.val) {
            return false;
        }
        head = head.next;
        tail = tail.pre;
    }
    return true;
};
