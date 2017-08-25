/**
 * @name Number of Segments in a String
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var num = 0;
    for (var i = 0; i < s.length-1; i++) {
        if (s[i] === ' ' && s[i+1] !== ' ') {
            num++;
        }
    }
    // 防止空字符串或者以空格开头的字符串
    if (s[0] === ' ' || s === '') {
            return num;
    }
    return num+1;
};
