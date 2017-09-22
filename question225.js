/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.stack = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    var pop = this.stack.pop();
    return pop;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    var len = this.stack.length;
    return this.stack[len-1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
   if (this.stack.length === 0) {
       return true;
   }  else {
       return false;
   }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
