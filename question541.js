/**
 * @name Reverse String II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var arr = s.split('');
    for (var left = 0; left < arr.length; left += 2 * k) {
        // 交换前两位，Math.min(left + k - 1, arr.length - 1)判断可能出现i与j为同一个值
        for (var i = left, j = Math.min(left + k - 1, arr.length - 1); i < j; i++, j--) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    return arr.join('');
};
