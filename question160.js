/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @name Intersection of Two Linked Lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //boundary check
    if (headA == null || headB == null) {
       return null;
    }

    var a = headA;
    var b = headB;

    //if a & b have different len, then we will stop the loop after second iteration
    // 类似两个梯形组成一个矩形
    while( a !== b){
    	//for the end of first iteration, we just reset the pointer to the head of another linkedlist
        a = a === null? headB : a.next;
        b = b === null? headA : b.next;
    }

    return a;
};
