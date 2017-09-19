/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @name Linked List Cycle
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 使用了额外的空间
    // while (head && head.next) {
    //     if (!head.hasOwnProperty('rem')) {
    //         head.rem = 'x';
    //         head = head.next;
    //     } else {
    //         return true;
    //     }
    // }
    // return false;

    if(head === null) {
        return false;
    }
    var walker = head;
    var runner = head;
    // 使用两个节点遍历链表，其中一个速度为另外一个的两倍，若出现节点重复的状态
    // 则说明快的那个追上了慢的那个节点，必然存在圆环
    while(runner.next !==null && runner.next.next != null) {
        walker = walker.next;
        runner = runner.next.next;
        if(walker === runner) {
           return true;
        }
    }
    return false;
};
