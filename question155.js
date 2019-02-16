// seems more small
/**
 * initialize your data structure here.
 */
let MinStack = function() {
    this.items = [];
    this.minValue;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push([x, this.minValue]);
    if (this.items.length === 1) {
        this.minValue = x;
    } else if (this.minValue > x) {
        this.minValue = x;
    }
};

/**
 * @return {void}
 */
// push最后一项前的最小值储存在最后一项中！
MinStack.prototype.pop = function() {
    let item = this.items.pop();
    this.minValue = item[1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let len = this.items.length;
    return this.items[len - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * let param_3 = obj.top()
 * let param_4 = obj.getMin()
 */
