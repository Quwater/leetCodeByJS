/**
 *@name Student Attendance Record I
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var arr = s.split('');
    var abs = 0;
    var late = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            abs++;
            if (abs >= 2) {
                return false;
            }
        }
        if (arr[i] === 'L') {
            late++;
            if (arr[i+1] !== 'L') {
                late = 0;
            // 当late等于2，并且下一选项也为‘L时，说明连续三次迟到
            } else if (late === 2) {
                return false;
            }
        }
    }
    return true;
};
