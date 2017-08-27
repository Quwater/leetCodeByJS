/**
 * @name Find All Duplicates in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // 使用 ES6 中的map 类型最简单
    var result = [];
    var m = new Map();
    for(var i =0; i < nums.length; i++ ) {
        if(m.has(nums[i])){
        result.push(nums[i]);
    }
        m.set(nums[i],i);
    }

    return result;
    // var arr = [];
    // for (var i = 0; i < nums.length; i++) {
    //     // 利用负索引存储相应数值的出现次数
    //     if (nums[-nums[i]] === undefined) {
    //         nums[-nums[i]] = 1;
    //     } else {
    //         nums[-nums[i]] = 2;
    //     }
    // }
    //
    // for (var j = -1; j >= -nums.length; j--) {
    //     if (nums[j] === 2) {
    //         arr.push(Math.abs(j));
    //     }
    // }
    //
    // return arr;

    // var arr = [];
    // arr.length = nums.length;
    // for (var i = 0; i < arr.length; i++) {
    //     arr[i] = 0;
    // }
    // for (var j = 0; j < nums.length; j++) {
    //     arr[nums[j]-1]++;
    // }
    // var output = [];
    // for (var k = 0; k < arr.length; k++) {
    //     if (arr[k] > 1) {
    //         output.push(k+1);
    //     }
    // }
    // return output;
};
