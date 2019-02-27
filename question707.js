/**
 * Initialize your data structure here.
 */
function Node(val) {
    this.val = val;
    this.next = null;
}
let MyLinkedList = function () {
    this.head = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.length) {
        return -1;
    }
    let current = this.head,
        i = 0;
    while (i !== index) {
        current = current.next;
        i++;
    }
    return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.length === 0) {
        this.addAtHead(val);
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    let newNode = new Node(val);
    newNode.next = null;
    current.next = newNode;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) return;
    if (index === this.length) {
        this.addAtTail(val);
        return;
    }
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0,
        cur = this.head;
    while (i < index - 1) i++, cur = cur.next;
    let prev = cur,
        next = cur,
        newNode = new Node(val);
    newNode.next = next;
    prev.next = newNode;
    this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) return;
    if (index === 0) {
        this.head = this.head.next;
    }
    let i = 0,
        cur = this.head;
    while (i < index - 1) i++, cur = cur.next;
    let prev = cur,
        next = cur.next.next;
    prev.next = next;
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */