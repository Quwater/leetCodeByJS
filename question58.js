/**
 * @name Length of Last Word
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0;
    // 去除字符串两端的空格
    var str = s.trim();
    for (var i = str.length-1; i >= 0; i--) {
        if (str[i] !== ' ') {
            count++;
        }
        // 如果后面字符为空或者未定义（即超出索引范围），该word已结束
        if (str[i-1] === ' ' || str[i-1] === undefined) {
            break;
        }
    }
    return count;
};
