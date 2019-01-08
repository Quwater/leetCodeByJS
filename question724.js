/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     let left = nums.slice(0, i);
    //     let right = nums.slice(i+1, nums.length);
    //     if (left.reduce((a, b) => a + b, 0) === right.reduce((a, b) => a + b, 0)) {
    //         return i;
    //     }
    // }
    // return -1;
    
    let sum = nums.reduce((a,b)=>a+b, 0);
    let sumL = 0, sumR = sum;
    for(let i=0, len=nums.length; i<len; i++){
        sumR -= nums[i];
    	if(sumL === sumR) return i;
    	sumL += nums[i];
    }
    return -1;
};