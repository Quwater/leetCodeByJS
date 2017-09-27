/**
 * @name 167. Two Sum II - Input array is sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // var index = [];
    // for (var i = 0; i < numbers.length; i++) {
    //     for (var j = numbers.length - 1; j > 0; j--) {
    //         if (numbers[i] + numbers[j] == target) {
    //             index.push(i+1);
    //             index.push(j+1);
    //             return index;
    //         }
    //     }
    // }
    //避免循环两次，改为，左一次，右一次（小于目标，则左边小，大于目标，则右边大）
    var l = 0,
        r = numbers.length-1,
        index = [];
    while (l < r) {
        s = numbers[l] + numbers[r];
        if (s === target) {
            index.push(l+1);
            index.push(r+1);
            return index;
        } else if (s < target) {
            l += 1;
        } else {
            r -= 1;
        }
    }
};
