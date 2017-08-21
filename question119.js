/**
 * @name Pascal's Triangle II
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [];
    arr.length = rowIndex+1;
    for (var k = 0; k < arr.length; k++) {
        arr[k] = 0;
    }
    arr[0] = 1;
    // 不能使用递归，就只能考虑自己累加
    for (var i = 1; i < rowIndex+1; i++) {
        for (var j = i; j > 0; j--) {
            arr[j] += arr[j-1];
        }
    }
    return arr;
};
