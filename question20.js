/**
 * @name Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = s.split('');
    var arr1 = ['(', '{', '['];
    var arr2 = [')', '}', ']'];
    var jian = function() {
        var len = arr.length;
        for (var i = 0; i < arr.length-1; i++) {
            // 防止前后都不在对应数组中导致indexOf()值都为-1
            if (arr1.indexOf(arr[i]) !== -1 && arr1.indexOf(arr[i]) === arr2.indexOf(arr[i+1])) {
                arr.splice(i, 2);
                if (arr.length === 0) {
                    return;
                }
            }
        }
        if (len === arr.length) {
            return;
        }
        jian();
    };
    jian();
    //一一减完就说明是合法的
    if (arr.length === 0) {
        return true;
    }  else {
        return false;
    }
};
