/**
 * @name Beautiful Arrangement II
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    var arr = [];
    arr.length = n;
    for (var i = 0; i < n; i++) {
        arr[i] = i+1;
    }
    // 每一次转移最后一项，增加两种差值，k-=2
    for (;k > 1; k-=2) {
        var a = arr.splice(n-1, 1);
        arr.splice(n-k, 0, a[0]);
    }
    return arr;
};
