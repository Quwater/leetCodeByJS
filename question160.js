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

// O(n)
let getIntersectionNode = function (headA, headB) {
    let a = headA,
        b = headB;

    //if a & b have different len, then we will stop the loop after second iteration
    // 类似两个梯形组成一个矩形
    while (a !== b) {
        //for the end of first iteration, we just reset the pointer to the head of another linkedlist
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;

    // let set = new Set();
    // while (headA) {
    //     set.add(headA);
    //     headA = headA.next;
    // }
    // while (headB) {
    //     if (set.has(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;
};
getIntersectionNode();