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
// O(n)
let isPalindrome = function(head) {
    // change linked list to array
    // let current = head,
    //     str = '';
    // while (current) {
    //     str += current.next ? current.val + ' ' : current.val;
    //     current = current.next;
    // }
    // let s = str.split(' ');
    // for(let i = 0; i < s.length/2; i++){
    //     if(!(s[i] === s[s.length-1-i])){
    //         return false;
    //     }
    // }
    // return true;

    // more smart
    if (!head) {
        return true;
    }
    let fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let pre = null;
    while (slow) {
        let next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }
    let current = head;
    while (pre) {
        if (pre.val !== current.val) {
            return false;
        }
        pre = pre.next;
        current = current.next;
    }
    return true;
};
isPalindrome();
