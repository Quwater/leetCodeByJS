/**
 * @name 448. Find All Numbers Disappeared in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // var arr = [];
    // var disArr = [];
    // arr.length = nums.length;
    //
    // // 创建一个全为零的数组，长度与 nums 一致
    // for (var i = 0; i < arr.length; i++) {
    //     arr[i] = 0;
    // }
    //
    // // nums 值对应 arr 的索引
    // for (var j = 0; j< nums.length; j++) {
    //     arr[nums[j]-1]++;
    // }
    //
    // // 找出没有对应的索引，并加入到 disArr中
    // for (var k = 0; k < arr.length; k++) {
    //     if (arr[k] === 0) {
    //         disArr.push(k+1);
    //     }
    // }
    // return disArr;
    let ret = [];

    for(let i = 0; i < nums.length; i++) {
        // 将已有值的位数上的值变为负数，用到绝对值，相比上面方法，减少空间占用
        let val = Math.abs(nums[i]) - 1;
        if(nums[val] > 0) {
            nums[val] = -nums[val];
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            ret.push(i+1);
        }
    }
    return ret;
};
