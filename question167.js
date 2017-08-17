/**
 * @name 167. Two Sum II - Input array is sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var index = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = numbers.length - 1; j > 0; j--) {
            if (numbers[i] + numbers[j] == target) {
                index.push(i+1);
                index.push(j+1);
                return index;
            }
        }
    }
};
