/**
 * @name Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var start = '1';
    var result = '';
    var tmp = 1;
    for (i=0; i<n-1; i++){
        // tmp will count all repeats
        // 1转为11，2转为12， 11转为21
        for (var j=0; j<start.length; j++){
            if(start[j] !== start[j+1] || j === start.length - 1){
                result += tmp + start[j];
                tmp = 1;
            } else {
                tmp += 1;
            }
        }
        start = result;
        result = '';
    }
    return start;
};
