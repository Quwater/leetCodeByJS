/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// O(n)
let middleNode = function(head) {
    // let current = head,
    //     length = 0,
    //     arr = [];
    // while (current != null) {
    //     arr.push(current);
    //     current = current.next;
    //     length++;
    // }
    // return arr[Math.floor(length/2)];

    // more clever
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
};
middleNode();