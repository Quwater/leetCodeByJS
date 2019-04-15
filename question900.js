/**
 * @param {number[]} A
 */
let RLEIterator = function (A) {
    // can't use in lager number 

    //     let res = [];
    //     for (let i = 0; i < A.length-1; i += 2) {
    //         for (let j = 0; j < A[i]; j++) {
    //             res.push(A[i+1]);
    //         }
    //     }

    //     this.nums = res;
    this.nums = A;
    this.currentIndex = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
    // if (n <= this.nums.length) {
    //     let res = this.nums[n-1];
    //     this.nums = this.nums.splice(n);
    //     return res;
    // } else {
    //     return -1;
    // }
    for (let i = this.currentIndex; i < this.nums.length; i += 2) {
        if (this.nums[i] >= n) {
            this.nums[i] -= n;
            return this.nums[i + 1];
        } else {
            n -= this.nums[i];
            this.currentIndex += 2;
        }
    }

    return -1;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */