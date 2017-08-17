/**
 * @name 448. Find All Numbers Disappeared in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr = [];
    var disArr = [];
    arr.length = nums.length;

    // 创建一个全为零的数组，长度与 nums 一致
    for (var i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }

    // nums 值对应 arr 的索引
    for (var j = 0; j< nums.length; j++) {
        arr[nums[j]-1]++;
    }

    // 找出没有对应的索引，并加入到 disArr中
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === 0) {
            disArr.push(k+1);
        }
    }
    return disArr;
};
