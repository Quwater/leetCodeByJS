/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let arr = this.arr.slice(0);
    let n = arr.length - 1;
    while (n > 0) {
        let random = Math.floor(Math.random() * (n + 1));
        [arr[random], arr[n]] = [arr[n], arr[random]];
        n--;
    }
    return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
