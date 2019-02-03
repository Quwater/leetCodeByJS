/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
    // O(n2)
    // nums.sort((a, b) => (a - b));
    // let dup = 0,
    //     arr = [];
    // for (let i = 0; i < nums.length-1; i++) {
    //     if (nums[i] === nums[i+1]) {
    //         dup = nums[i];
    //         arr = nums.slice(0, i).concat(nums.slice(i+1));
    //     } 
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== i + 1) {
    //         return [dup, i+1];
    //     } 
    // }
    // return [dup, nums.length];

    // O(n)
    let occursTwice = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            occursTwice = index + 1;
        }
        nums[index] = -nums[index];
    }
    
    let result = [occursTwice];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && i + 1 !== occursTwice) {
            result.push(i + 1);
            return result;
        }

    }
};
findErrorNums([2, 2, 3]);