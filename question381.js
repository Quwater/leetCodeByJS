/**
 * Initialize your data structure here.
 */
const RandomizedCollection = function () {
    this.arr = [];
    this.map = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    this.arr.push(val);
    if (this.map[val]) {
        this.map[val].push(this.arr.length - 1);
        return false;
    } else {
        this.map[val] = [this.arr.length - 1];
        return true;
    }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    let a = this.map[val];
    if (a) {
        let index = a.pop();
        if (index !== this.arr.length - 1) {
            let last = this.arr.length - 1;
            let newA = this.map[this.arr[last]];
            let change = newA.findIndex((e) => e === last);
            newA[change] = index;
            [this.arr[index], this.arr[last]] = [
                this.arr[last],
                this.arr[index],
            ];
        }
        this.arr.pop();
        if (a.length === 0) {
            delete this.map[val];
        }
        return true;
    } else {
        return false;
    }
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    return this.arr[(Math.random() * this.arr.length) | 0];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
